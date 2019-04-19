import validator from 'validator';
import inputmask from 'inputmask';

const addInvalidIcon = (el: HTMLInputElement) => {
  el.parentElement.querySelector('img').classList.remove('hidden');
};

const removeInvalidIcon = (el: HTMLInputElement) => {
  el.parentElement.querySelector('img').classList.add('hidden');
};

export const validateInput = (el: HTMLInputElement) => {
  if (el.classList.contains('required')) {
    if (validator.isEmpty(el.value)) {
      addInvalidIcon(el);
      return false;
    } else {
      removeInvalidIcon(el);
    }
  }

  if (el.classList.contains('phone')) {
    if (!validator.isMobilePhone(inputmask.unmask(el.value, { alias: '+9 (999) 999-99-99' }), 'ru-RU')) {
      addInvalidIcon(el);
      return false;
    } else {
      removeInvalidIcon(el);
    }
  }

  if (el.classList.contains('email')) {
    if (!validator.isEmail(el.value)) {
      addInvalidIcon(el);
      return false;
    } else {
      removeInvalidIcon(el);
    }
  }

  return true;
};
