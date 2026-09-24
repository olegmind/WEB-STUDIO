document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const hamburger = document.querySelector('.hamburger');
  const openModalButton = document.getElementById('open-order-modal');
  const modal = document.getElementById('order-modal');
  const closeModalButton = document.querySelector('.modal-close');

  if (menuToggle && hamburger) {
    hamburger.addEventListener('click', () => {
      menuToggle.checked = !menuToggle.checked;
    });
  }

  if (!openModalButton || !modal) {
    return;
  }

  const openModal = () => {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    modal.inert = false;
    document.body.style.overflow = 'hidden';
    closeModalButton?.focus();
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    modal.inert = true;
    document.body.style.overflow = '';
    requestAnimationFrame(() => openModalButton.focus());
  };

  openModalButton.addEventListener('click', openModal);

  if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  const form = modal.querySelector('.modal-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      closeModal();
    });
  }
});
