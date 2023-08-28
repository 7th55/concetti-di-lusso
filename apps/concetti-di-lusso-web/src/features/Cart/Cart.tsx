// Hooks
import { useCartItem } from './store/store/CartSlice';
import { useGetProductsByNameQuery } from './api/CartApi';
// Components
import { Box, Container, LinearProgress, Typography } from '@mui/material';
// Types
import { ProductData } from '/src/entites/ProductCard';
import { ProductFromCart } from '/src/shared/types';
import { useEffect, useState } from 'react';

const searchByNameFormatter = (
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

export const Cart = () => {
  const [total, setTotal] = useState(0);
  const products = useCartItem();
  
  const getNames = (i: ProductFromCart): ProductFromCart['name'] => i.name;
  const getCount = (product: ProductData) =>
    products.find((i) => i.name === product.name)?.count;
  const getTotalPrice = (products: Array<{ price: number }>) =>
    products.reduce((r, i) => r + Number(i.price), 0);

  const productNames = products.map(getNames);

  const query = productNames.map(searchByNameFormatter).join('');

  const { data, isLoading, isError, isSuccess } =
    useGetProductsByNameQuery(query);

  useEffect(() => {
    // Вынести в стор
    if (isSuccess) {
      data.map(
        (product: ProductData, index: number, array: Array<ProductData>) => {
          const count = getCount(product);
          if (array.length === index + 1) {
            const l = array.map((i: any) => {
              return {
                price: Number(i.price) * Number(count),
              };
            });
            setTotal(getTotalPrice(l));
          }
        }
      );
    }
  }, [isSuccess]);

  return (
    <section>
      <Container maxWidth={false} sx={{ maxWidth: '1488px' }}>
        {isLoading ? (
          <Box sx={{ width: '100%' }}>
            <LinearProgress sx={{ color: 'primary.main', width: '100%' }} />
          </Box>
        ) : isError ? (
          <Box sx={{ width: '100%' }}>
            <Typography>Error</Typography>
          </Box>
        ) : (
          data.map((product: ProductData, index: number) => {
            const count = getCount(product);
            return (
              <Box key={product + ' ' + index} sx={{ width: '100%' }}>
                <Typography>
                  {product.name} {count}
                </Typography>
              </Box>
            );
          })
        )}
        {data && (
          <Box sx={{ width: '100%' }}>
            <Typography>{total}</Typography>
          </Box>
        )}
        {data && !data.length && (
          <Box sx={{ width: '100%' }}>
            <Typography>Add Products</Typography>
          </Box>
        )}
      </Container>
    </section>
  );
};
