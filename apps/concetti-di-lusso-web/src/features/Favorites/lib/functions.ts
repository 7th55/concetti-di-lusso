// TODO: Возможно это нужно вынести в shared
export const stringForQuery = (string: string): string => {
  const deleteSpacesRegExp = /^ +| +$|( ) +/g;
  const deleteSpaces = string.replace(deleteSpacesRegExp, ' ');
  const firstSpace =
    +deleteSpaces[0] == 0 ? deleteSpaces.replace(' ', '') : deleteSpaces;
  const replaceSpacesBySymbols = firstSpace.replace(/ /g, '%20');
  const deleteLastSymbol = replaceSpacesBySymbols.replace(/%20$/, '');

  const result = deleteLastSymbol.toLowerCase();

  return result;
};

export const searchByNameFormatter =<T> (
  product: string,
  index: number,
  array: Array<T>
) => {
  const searchBy = index !== 0 ? 'name=' : '=';
  const lastItem = array.length !== index + 1 ? '&' : '';
  const replace = product.replace(/ /g, '%20');
  const result = searchBy + replace + lastItem;
  return result;
};
