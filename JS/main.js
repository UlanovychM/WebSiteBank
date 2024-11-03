'use strict';
import modal from './modules/modals/modals';
import buttons from './modules/buttons/button';
import tabs from './modules/tabs/tab';
import navigation from './modules/navigation/navigation';

window.addEventListener('DOMContentLoaded', () => {
  modal();
  buttons();
  tabs();
  navigation();
});
