export type ButtonType =
  | 'menu'
  | 'select'
  | 'search'
  | 'favorites'
  | 'shopping'
  | 'signIn'
  | 'shopNow'
  | 'addCart';

type ButtonClassesType =
  | 'button__menu-button'
  | 'button__select-button'
  | 'button__search-button'
  | 'button__favorites-button'
  | 'button__shopping-button'
  | 'button__sign-in-button'
  | 'button__shop-now-button'
  | 'button__add-cart';

type HoverClassesType<T extends string> = `${T} ${T}_hover`;

type ButtonStylesConfigType = {
  type: ButtonType;
  hover: boolean;
};

export type ButtonStylesReturnType =
  | ButtonClassesType
  | HoverClassesType<ButtonClassesType>;

export type ButtonStylesType = (
  styles: ButtonStylesConfigType
) => ButtonStylesReturnType;
