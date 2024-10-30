const buttons = () => {
  const btnScroll = document.querySelector('.btn--scroll-to');
  const section = document.querySelector('#section--1');

  btnScroll.addEventListener('click', e => {
    // const sectionClients = section.getBoundingClientRect();
    // window.scrollTo({
    //   left: sectionClients.left + window.scrollX,
    //   top: sectionClients.top + window.scrollY,
    //   behavior: 'smooth',
    // });

    section.scrollIntoView({ behavior: 'smooth' });
  });
};

export default buttons;
