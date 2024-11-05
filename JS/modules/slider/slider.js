const slider = () => {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const sliderBtnLeft = document.querySelector('.slider__btn--left');
  const sliderBtnRight = document.querySelector('.slider__btn--right');
  const dot = document.querySelector('.dots');

  const createDots = () => {
    slides.forEach((_, index) =>
      dot.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${index}"></button>`
      )
    );
  };
  createDots();

  const activeDot = slide => {
    document.querySelectorAll('.dots__dot').forEach(elem => {
      elem.classList.remove('dots__dot--active');
    });

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add(`dots__dot--active`);
  };

  let currentSlide = 0;
  const numberSlides = slides.length;

  const moveToSlide = elem => {
    slides.forEach(
      (slide, index) =>
        (slide.style.transform = `translateX(${(index - elem) * 100}%)`)
    );
  };

  moveToSlide(0);
  activeDot(0);

  const nextSlide = () => {
    if (currentSlide === numberSlides - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    moveToSlide(currentSlide);
    activeDot(currentSlide);
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      currentSlide = numberSlides - 1;
    } else {
      currentSlide--;
    }

    moveToSlide(currentSlide);
    activeDot(currentSlide);
  };

  sliderBtnRight.addEventListener('click', nextSlide);

  sliderBtnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });

  dot.addEventListener('click', e => {
    if (e.target.classList.contains('dots__dot')) {
      const slide = e.target.dataset.slide;
      moveToSlide(slide);
      activeDot(slide);
    }
  });
};

export default slider;
