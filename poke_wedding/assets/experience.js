export function mountInvitationIntro({ intro, shell, body, image, skip, reducedMotion, schedule = setTimeout, cancel = clearTimeout, scrollToTop = () => {}, onFinish = () => {} }) {
  let finished = false;
  const timers = new Set();
  const later = (fn, delay) => {
    const timer = schedule(() => { timers.delete(timer); fn(); }, delay);
    timers.add(timer);
  };
  const finish = () => {
    if (finished) return;
    finished = true;
    timers.forEach(cancel);
    timers.clear();
    shell.inert = false;
    body.classList.remove('intro-running');
    intro.classList.add('is-leaving');
    scrollToTop();
    onFinish();
    if (reducedMotion) intro.hidden = true;
    else later(() => { intro.hidden = true; }, 280);
  };
  skip.addEventListener('click', finish);
  intro.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') finish();
    if (event.key === 'Tab') { event.preventDefault(); skip.focus({ preventScroll: true }); }
  });
  if (reducedMotion) {
    finish();
  } else {
    intro.hidden = false;
    shell.inert = true;
    body.classList.add('intro-running');
    skip.focus({ preventScroll: true });
    // A missing/slow asset can never prevent access to the invitation.
    later(finish, 4200);
    Promise.resolve().then(() => image.decode()).then(() => {
      if (finished) return;
      intro.classList.add('is-ready');
      later(finish, 1800);
    }).catch(finish);
  }
  return { finish };
}

export function mountGalleryJourney({ gallery, journey, stage, photos, status, skip, reducedMotion, schedule = setTimeout, cancel = clearTimeout, frame = requestAnimationFrame, cancelFrame = cancelAnimationFrame, onReveal = () => {} }) {
  let phase = 'closed';
  let timer = null;
  let pendingFrame = null;
  const clearPending = () => {
    if (timer !== null) cancel(timer);
    if (pendingFrame !== null) cancelFrame(pendingFrame);
    timer = null;
    pendingFrame = null;
  };
  const reveal = () => {
    if (phase === 'closed' || phase === 'revealed') return;
    clearPending();
    phase = 'revealed';
    gallery.classList.remove('is-encountering');
    journey.classList.remove('is-encounter');
    journey.hidden = true;
    photos.hidden = false;
    gallery.scrollTop = 0;
    onReveal();
  };
  const encounter = () => {
    if (phase !== 'walking') return;
    phase = 'encounter';
    status.textContent = '지현 🤍 민하 발견!!';
    journey.classList.add('is-encounter');
    gallery.classList.add('is-encountering');
    timer = schedule(reveal, 850);
  };
  const update = () => {
    pendingFrame = null;
    if (phase !== 'walking') return;
    const distance = Math.max(1, journey.offsetHeight - stage.offsetHeight);
    const progress = Math.min(1, Math.max(0, gallery.scrollTop / distance));
    journey.style.setProperty('--grass-travel', `${Math.round(progress * 260)}px`);
    journey.style.setProperty('--walk-progress', String(progress));
    if (progress >= .72) encounter();
  };
  const open = () => {
    clearPending();
    phase = 'walking';
    gallery.classList.remove('is-encountering');
    journey.classList.remove('is-encounter');
    journey.style.setProperty('--grass-travel', '0px');
    journey.style.setProperty('--walk-progress', '0');
    status.textContent = '아래로 스크롤해 수풀을 지나가세요';
    journey.hidden = false;
    photos.hidden = true;
    gallery.scrollTop = 0;
    if (reducedMotion) reveal();
  };
  const close = () => {
    clearPending();
    phase = 'closed';
    gallery.classList.remove('is-encountering');
    journey.classList.remove('is-encounter');
  };
  gallery.addEventListener('scroll', () => {
    if (phase === 'walking' && pendingFrame === null) pendingFrame = frame(update);
  }, { passive: true });
  skip.addEventListener('click', reveal);
  return { open, close, reveal, update, get phase() { return phase; } };
}

if (typeof document !== 'undefined') {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  mountInvitationIntro({
    intro: document.querySelector('#invitationIntro'),
    shell: document.querySelector('#top'),
    body: document.body,
    image: document.querySelector('#introBall'),
    skip: document.querySelector('#skipIntro'),
    reducedMotion,
    scrollToTop: () => window.scrollTo({ top: 0, behavior: 'instant' }),
    onFinish: () => {
      if (document.querySelector('#invitationIntro').contains(document.activeElement)) {
        document.querySelector('.topbar__brand').focus({ preventScroll: true });
      }
    },
  });
  const journey = mountGalleryJourney({
    gallery: document.querySelector('#gallery'),
    journey: document.querySelector('#galleryJourney'),
    stage: document.querySelector('#journeyStage'),
    photos: document.querySelector('#galleryPhotos'),
    status: document.querySelector('#journeyStatus'),
    skip: document.querySelector('#skipJourney'),
    reducedMotion,
    onReveal: () => {
      if (document.querySelector('#galleryJourney').contains(document.activeElement)) {
        document.querySelector('[data-close-gallery]').focus({ preventScroll: true });
      }
    },
  });
  document.addEventListener('gallery:open', journey.open);
  document.addEventListener('gallery:close', journey.close);
}
