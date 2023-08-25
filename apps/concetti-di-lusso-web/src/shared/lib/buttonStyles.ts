import { ButtonStylesReturnType, ButtonStylesType } from '/src/shared/types';

export const buttonStylesClass: ButtonStylesType = (type) => {
  let buttonClass;

  switch (type) {
    case 'menu':
      buttonClass = 'button__menu-button';
      break;
    case 'select':
      buttonClass = 'button__select-button';
      break;
    case 'search':
      buttonClass = 'button__search-button';
      break;
    case 'favorites':
      buttonClass = 'button__favorites-button';
      break;
    case 'shopping':
      buttonClass = 'button__shopping-button';
      break;
    case 'signIn':
      buttonClass = 'button__sign-in-button';
      break;
    case 'shopNow':
      buttonClass = 'button__shop-now-button';
      break;
    case 'shopNowBlack':
      buttonClass = 'button__shop-now-button_black';
      break;
    case 'addCart':
      buttonClass = 'button__add-cart';
      break;
    case 'regular':
      buttonClass = 'button__regular';
      break;
    default:
      '';
  }

  return buttonClass as ButtonStylesReturnType;
};
