export const section = document.querySelector('#section--1');
export const nav = document.querySelector('.nav');

const buttons = () => {
  const btnScroll = document.querySelector('.btn--scroll-to');

  //--------------New---------------
  const navLinks = document.querySelector('.nav__links');

  navLinks.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('nav__link')) {
      const href = e.target.getAttribute('href');

      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });

  //--------------Old---------------
  // const navLinks = document.querySelectorAll('.nav__link');

  // navLinks.forEach(nav =>
  //   nav.addEventListener('click', e => {
  //     e.preventDefault();

  //     const href = nav.getAttribute('href');

  //     document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  //   })
  // );

  //-----------------------------

  btnScroll.addEventListener('click', e => {
    //--------------Old---------------
    // const sectionClients = section.getBoundingClientRect();
    // window.scrollTo({
    //   left: sectionClients.left + window.scrollX,
    //   top: sectionClients.top + window.scrollY,
    //   behavior: 'smooth',
    // });
    //--------------New---------------
    section.scrollIntoView({ behavior: 'smooth' });
  });

  //--------------nav animation----------

  const handleAnimation = (e, opacity) => {
    if (e.target.classList.contains('nav__link')) {
      const linkOver = e.target;
      const sibLink = linkOver
        .closest('.nav__links')
        .querySelectorAll('.nav__link');

      sibLink.forEach(element => {
        if (element !== linkOver) element.style.opacity = opacity;
      });
    }
  };

  nav.addEventListener('mouseover', e => handleAnimation(e, 0.4));
  nav.addEventListener('mouseout', e => handleAnimation(e, 1));
};

export default buttons;
