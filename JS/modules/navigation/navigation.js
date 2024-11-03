import { section, nav } from '../buttons/button';

const navigation = () => {
  const section1 = section.getBoundingClientRect();
  window.addEventListener('scroll', () => {
    if (window.scrollY > section1.top) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });
};

export default navigation;
