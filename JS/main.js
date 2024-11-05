'use strict';
import modal from './modules/modals/modals';
import buttons from './modules/buttons/button';
import tabs from './modules/tabs/tab';
import navigation from './modules/navigation/navigation';
import slider from './modules/slider/slider';

window.addEventListener('DOMContentLoaded', () => {
  modal();
  buttons();
  tabs();
  // navigation();
  slider();
});
