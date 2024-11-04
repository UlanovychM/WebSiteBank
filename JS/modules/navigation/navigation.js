import { nav } from '../buttons/button';
// import { section, nav } from '../buttons/button';

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

  const headerObserver = new IntersectionObserver(getStickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `${-navHeight}px`,
  });
  headerObserver.observe(header);

  //---------Section observer----------
  const allSection = document.querySelectorAll('.section');

  const getSectionObserver = (entries, observer) => {
    const entry = entries[0];
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  };
  const sectionObserver = new IntersectionObserver(getSectionObserver, {
    root: null,
    threshold: 0.2,
  });

  allSection.forEach(section => {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
  });
};

export default navigation;
