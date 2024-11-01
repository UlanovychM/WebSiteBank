'use strict';
import modal from './modules/modals/modals';
import buttons from './modules/buttons/button';
import tabs from './modules/tabs/tab';

window.addEventListener('DOMContentLoaded', () => {
  modal();
  buttons();
  tabs();
});
