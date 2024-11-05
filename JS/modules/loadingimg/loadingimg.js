const loadingImg = () => {
  const lazyImg = document.querySelectorAll('img[data-src]');

  const getImgObserver = (entries, observer) => {
    const entry = entries[0];
    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', () =>
      entry.target.classList.remove('lazy-img')
    );

    observer.unobserve(entry.target);
  };
  const lazyImgObserver = new IntersectionObserver(getImgObserver, {
    root: null,
    threshold: 0.7,
  });

  lazyImg.forEach(img => lazyImgObserver.observe(img));
};

export default loadingImg;
