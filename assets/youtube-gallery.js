import { galleryManifest } from './youtube-gallery-data.js';

const VIDEO_ID = /^[A-Za-z0-9_-]{11}$/;
export function validateManifest(manifest) {
  if (!manifest.ready) return { ready: false, reason: 'Editorial sequence awaiting verification' };
  if (manifest.videos.length !== manifest.source.visibleCards || manifest.pendingPositions.length) {
    throw new Error('The fixed PDF sequence is incomplete');
  }
  const ids = new Set();
  manifest.videos.forEach((video, index) => {
    if (video.position !== index + 1 || !VIDEO_ID.test(video.id) || !video.title?.trim()) {
      throw new Error(`Invalid fixed video entry at position ${index + 1}`);
    }
    if (ids.has(video.id)) throw new Error(`Duplicate video at position ${index + 1}`);
    ids.add(video.id);
    if (!video.evidence?.url || video.evidence.pdfCard !== video.position) {
      throw new Error(`Missing verification evidence at position ${index + 1}`);
    }
    const verified = new URL(video.evidence.url);
    if (!['www.youtube.com', 'youtube.com', 'youtu.be'].includes(verified.hostname)) {
      throw new Error('Unexpected video evidence destination');
    }
    const evidenceId = verified.hostname === 'youtu.be'
      ? verified.pathname.slice(1) : verified.searchParams.get('v');
    if (evidenceId !== video.id) throw new Error('Evidence does not match video ID');
  });
  return { ready: true };
}

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

export function createGallery(host, manifest) {
  const validation = validateManifest(manifest);
  const channel = manifest.channel;
  const root = element('section', 'ics-video-gallery');
  root.setAttribute('aria-label', `Vídeos de ${channel.title}`);
  const cover = element('img', 'ics-video-cover');
  cover.src = channel.cover;
  cover.alt = '';
  cover.width = 1138;
  cover.height = 188;
  cover.loading = 'lazy';
  root.append(cover);
  const channelHeader = element('div', 'ics-video-channel');
  const avatar = element('img', 'ics-video-avatar');
  avatar.src = channel.avatar;
  avatar.alt = '';
  avatar.width = avatar.height = 64;
  avatar.loading = 'lazy';
  const identity = element('div', 'ics-video-identity');
  identity.append(element('h3', '', channel.title), element('p', '', channel.handle));
  const channelLink = element('a', 'ics-video-channel-link', 'YouTube ↗');
  channelLink.href = channel.url;
  channelLink.target = '_blank';
  channelLink.rel = 'noopener noreferrer';
  channelLink.setAttribute('aria-label', `Abrir canal ${channel.title} no YouTube (nova aba)`);
  identity.append(channelLink);
  channelHeader.append(avatar, identity);
  root.append(channelHeader);

  if (!validation.ready) {
    // Keep the incomplete implementation out of the production site until verified.
    // Preview fallback has no invented cards, IDs, statistics, or external plugin.
    root.append(element('p', 'ics-video-empty', 'Visite nosso canal para assistir aos vídeos.'));
    host.replaceChildren(root);
    return { ready: false, root };
  }

  const pageSize = 3;
  const pages = Math.ceil(manifest.videos.length / pageSize);
  let currentPage = 0;
  const grid = element('div', 'ics-video-grid');
  const status = element('p', 'ics-video-sr');
  status.setAttribute('aria-live', 'polite');
  status.setAttribute('aria-atomic', 'true');
  const pagination = element('nav', 'ics-video-pagination');
  pagination.setAttribute('aria-label', 'Páginas de vídeos');
  const previous = element('button', 'ics-video-page-arrow', '‹');
  previous.type = 'button';
  previous.setAttribute('aria-label', 'Página anterior de vídeos');
  const next = element('button', 'ics-video-page-arrow', '›');
  next.type = 'button';
  next.setAttribute('aria-label', 'Próxima página de vídeos');
  const pageButtons = element('div', 'ics-video-pages');
  pagination.append(previous, pageButtons, next);
  const dialog = element('dialog', 'ics-video-dialog');
  const dialogTitle = element('h3', 'ics-video-sr');
  const close = element('button', 'ics-video-close', 'Fechar ×');
  close.type = 'button';
  const player = element('div', 'ics-video-player');
  dialog.append(dialogTitle, close, player);
  dialog.setAttribute('aria-label', 'Reproduzir vídeo');
  let returnFocus = null;
  function closePlayer() {
    player.replaceChildren();
    if (dialog.open) dialog.close();
    if (returnFocus?.isConnected) returnFocus.focus();
  }
  close.addEventListener('click', closePlayer);
  dialog.addEventListener('cancel', event => { event.preventDefault(); closePlayer(); });
  dialog.addEventListener('close', () => player.replaceChildren());
  function openPlayer(video, trigger) {
    returnFocus = trigger;
    dialogTitle.textContent = video.title;
    dialog.setAttribute('aria-label', video.title);
    // One iframe, created only after an explicit play action; no API/playlist calls.
    const iframe = element('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`;
    iframe.title = video.title;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    player.replaceChildren(iframe);
    dialog.showModal();
    close.focus();
  }
  function renderPage() {
    grid.replaceChildren();
    manifest.videos.slice(currentPage * pageSize, (currentPage + 1) * pageSize).forEach(video => {
      const card = element('article', 'ics-video-card');
      const play = element('button', 'ics-video-play');
      play.type = 'button';
      play.setAttribute('aria-label', `Reproduzir: ${video.title}`);
      const thumbnail = element('img');
      thumbnail.src = video.thumbnail || `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
      thumbnail.alt = '';
      thumbnail.width = 480;
      thumbnail.height = 360;
      thumbnail.loading = 'lazy';
      thumbnail.decoding = 'async';
      const playIcon = element('span', 'ics-video-play-icon', '▶');
      playIcon.setAttribute('aria-hidden', 'true');
      play.append(thumbnail, playIcon);
      if (video.duration) play.append(element('span', 'ics-video-duration', video.duration));
      play.addEventListener('click', () => openPlayer(video, play));
      const title = element('h4', 'ics-video-title');
      const videoLink = element('a', '', video.title);
      videoLink.href = `https://www.youtube.com/watch?v=${video.id}`;
      videoLink.target = '_blank';
      videoLink.rel = 'noopener noreferrer';
      title.append(videoLink);
      card.append(play, title);
      if (video.publishedLabel) card.append(element('p', 'ics-video-meta', video.publishedLabel));
      grid.append(card);
    });
    previous.disabled = currentPage === 0;
    next.disabled = currentPage === pages - 1;
    pageButtons.replaceChildren();
    for (let page = Math.max(0, currentPage - 2); page <= Math.min(pages - 1, currentPage + 2); page++) {
      const button = element('button', 'ics-video-page-dot', '•');
      button.type = 'button';
      button.setAttribute('aria-label', `Página ${page + 1} de ${pages}`);
      if (page === currentPage) button.setAttribute('aria-current', 'page');
      button.addEventListener('click', () => { currentPage = page; renderPage(); grid.querySelector('button')?.focus(); });
      pageButtons.append(button);
    }
    status.textContent = `Página ${currentPage + 1} de ${pages}. Vídeos ${currentPage * pageSize + 1} a ${Math.min((currentPage + 1) * pageSize, manifest.videos.length)}.`;
  }
  previous.addEventListener('click', () => { if (currentPage > 0) { currentPage--; renderPage(); if(previous.disabled)next.focus(); } });
  next.addEventListener('click', () => { if (currentPage < pages - 1) { currentPage++; renderPage(); if(next.disabled)previous.focus(); } });
  root.append(grid, status, pagination, dialog);
  renderPage();
  host.replaceChildren(root);
  return { ready: true, root };
}

const initialized = new WeakSet();
function mountGalleries() {
  document.querySelectorAll('[data-ics-video-gallery]').forEach(host => {
    if (!initialized.has(host)) {
      initialized.add(host);
      createGallery(host, galleryManifest);
    }
  });
}
if (typeof document !== 'undefined') {
  mountGalleries();
  new MutationObserver(mountGalleries).observe(document.documentElement, { childList: true, subtree: true });
}
