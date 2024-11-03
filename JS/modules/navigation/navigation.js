import { section, nav } from '../buttons/button';

const navigation = () => {
  //-------------OLD------------
  // const section1 = section.getBoundingClientRect();
  // window.addEventListener('scroll', () => {
  //   if (window.scrollY > section1.top) {
  //     nav.classList.add('sticky');
  //   } else {
  //     nav.classList.remove('sticky');
  //   }
  // });
  //------------NEW----------------
  const header = document.querySelector('.header');
  const navHeight = nav.getBoundingClientRect().height;
  const getStickyNav = entries => {
    const entry = entries[0];

    if (!entry.isIntersecting) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  };

  const observer = new IntersectionObserver(getStickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `${-navHeight}px`,
  });
  observer.observe(header);
};

export default navigation;
