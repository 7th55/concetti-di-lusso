import React from 'react';
import { useCartItem } from './store/store/CartSlice';
import { Box, Container, LinearProgress, Typography } from '@mui/material';
import { useGetProductsByNameQuery } from './api/CartApi';
import { ProductData } from '/src/entites/ProductCard';

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
  const products = useCartItem();

  const queryString = products.map(searchByNameFormatter);

  const { data, isLoading, isError } = useGetProductsByNameQuery(
    queryString.join('')
  );

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
          data.map((product: ProductData, index: number) => (
            <Box key={product + ' ' + index} sx={{ width: '100%' }}>
              <Typography key={product.id}>{product.name}</Typography>
            </Box>
          ))
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
