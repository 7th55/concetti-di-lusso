export const buttonStyle = (config) => {
  let { type, hover } = config;
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
    default:
      '';
  }

  hover && (buttonClass = `${buttonClass} ${buttonClass}_hover`);

  return buttonClass;
};
