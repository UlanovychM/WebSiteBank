const modal = () => {
  const modalWindow = document.querySelector('.modal-window');
  const overlay = document.querySelector('.overlay');
  const btnCloseModalWindow = document.querySelector(
    '.btn--close-modal-window'
  );
  const btnsOpenModalWindow = document.querySelectorAll(
    '.btn--show-modal-window'
  );

  const openModalWindow = e => {
    e.preventDefault();
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  const closeModalWindow = function () {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  btnsOpenModalWindow.forEach(item =>
    item.addEventListener('click', openModalWindow)
  );

  btnCloseModalWindow.addEventListener('click', closeModalWindow);
  overlay.addEventListener('click', closeModalWindow);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
      closeModalWindow();
    }
  });
};

export default modal;
