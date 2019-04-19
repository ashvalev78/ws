import { initMenu } from './modules/menu';
import { initBurgerMenu } from './modules/burgerMenu';
import { initToTop } from './modules/toTop';
import { initMoreBtn } from './modules/more';
import { triggerPopup } from './modules/popup';

import { validateInput } from './modules/validate';

import Inputmask from 'inputmask';
import axios from 'axios';

initMenu('nav-bar');
initToTop('to-top');
initToTop('logo-fixed');
initToTop('logo-mobile');
initMoreBtn('more');
triggerPopup('popup-form', 'contact-popup');
initBurgerMenu('burger');

new Inputmask('+9 (999) 999-99-99').mask(document.getElementById('phone'));

document.forms[0].querySelectorAll<HTMLInputElement>('input').forEach(el => {
  el.addEventListener('change', e => {
    validateInput(el);
  });
});

document.forms[0].addEventListener('submit', e => {
  e.preventDefault();
  let validate = true;
  document.forms[0].querySelectorAll<HTMLInputElement>('input').forEach(el => {
    if (!validateInput(el)) {
      validate = false;
    }
  });

  if (validate) {
    axios({
      method: 'post',
      url: 'http://webiraysport.com/api/mail_notify.php',
      data: {
        name: document.querySelector('#fio').innerHTML,
        company: document.querySelector('#company').innerHTML,
        phone: document.querySelector('#phone').innerHTML,
        mail: document.querySelector('#mail').innerHTML,
        message: document.querySelector('#message').innerHTML
      }
    }).then((response) => {
      if (response.data === 'ok') {
        triggerPopup('successPopup', '');
      } else {
        triggerPopup('failPopup', '');
      }
    }).catch(() => {
      triggerPopup('failPopup', '');
    });
  };
});

let popupBg = document.querySelector('.popup-bg');
let politics = document.querySelector('#politics');
let popupRules = document.querySelector('.popup__rules');
let rulesClose = document.querySelector('#rules-close');

politics.addEventListener('click', e => {
  e.preventDefault();
  popupRules.classList.add('popup--is-active');
  popupBg.classList.add('popup--is-active');
});

rulesClose.addEventListener('click', e => {
  e.preventDefault();
  popupRules.classList.remove('popup--is-active');
  popupBg.classList.remove('popup--is-active');
});
