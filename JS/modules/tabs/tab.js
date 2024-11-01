const tabs = () => {
  const operationsBtn = document.querySelectorAll('.operations__tab');
  const operationsContainer = document.querySelector(
    '.operations__tab-container'
  );
  const operationsContent = document.querySelectorAll('.operations__content');

  operationsContainer.addEventListener('click', e => {
    const clickBtn = e.target.closest('.operations__tab');
    const contentData = document.querySelector(
      `.operations__content--${clickBtn.dataset.tab}`
    );
    if (!clickBtn) return;
    operationsBtn.forEach(btn =>
      btn.classList.remove('operations__tab--active')
    );
    clickBtn.classList.add('operations__tab--active');
    operationsContent.forEach(content =>
      content.classList.remove('operations__content--active')
    );
    contentData.classList.add('operations__content--active');
  });
};

export default tabs;
