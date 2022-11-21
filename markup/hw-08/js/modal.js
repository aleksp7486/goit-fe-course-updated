(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    if (refs.modal.classList.contains('is-hidden')) {
      bodyScrollLock.enableBodyScroll(refs.modal);
      refs.modal.removeEventListener('click', onBackdropClick);
      return;
    }
    bodyScrollLock.disableBodyScroll(refs.modal);
    refs.modal.addEventListener('click', onBackdropClick);
  }

  function onBackdropClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }
    toggleModal();
  }
})();
