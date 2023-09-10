import { ProductFromCart } from '/src/shared/types';

export const searchByNameQueryStringFormatter = (
  product: string,
  index: number,
  array: Array<any>
) => {
  const searchBy = index !== 0 ? 'name=' : '=';
  const lastItem = array.length !== index + 1 ? '&' : '';
  const replace = product.replace(/ /g, '%20');
  const result = searchBy + replace + lastItem;
  return result;
};
const getNames = (i: ProductFromCart): ProductFromCart['name'] => i.name;

export const productsByNameQuery = (products: Array<ProductFromCart>) => {
  let query;
  return (query = products
    .map(getNames)
    .map(searchByNameQueryStringFormatter)
    .join(''));
};
