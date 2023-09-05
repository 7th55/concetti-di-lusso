// Hooks
import { useGetProductsByNameQuery } from './api/FavoritesApi';
// Components
import { SimpleGrid, Container, Text, Title, Box } from '@mantine/core';
import { ProductCard, ProductData } from '/src/entities/ProductCard';
// Types
import {
  addToFavorites,
  removeFromFavorites,
  useFavorites,
} from './store/favoritesSlice';
import { useDispatch } from 'react-redux';

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

export const Favorites = () => {
  const dispatch = useDispatch();
  const favoritesState = useFavorites();
  const products = favoritesState.items;

  const getNames = (i: { name: string }) => i.name;

  const productNames = products.map(getNames);

  const query = productNames.map(searchByNameFormatter).join('');
  const { data, isLoading, isError } = useGetProductsByNameQuery(query);

  return (
    <Container size={1440}>
      {favoritesState.items.length === 0 && (
        <Title order={2}>Add Favorite Products</Title>
      )}

      {isLoading ? (
        <Box sx={{ width: '100%' }}>Loading</Box>
      ) : isError ? (
        <Box sx={{ width: '100%' }}>
          <Text>Error</Text>
        </Box>
      ) : (
        <SimpleGrid cols={4}>
          {data.map((product: ProductData, index: number) => {
            return (
              <ProductCard
                variant="favoritesCard"
                key={product.id}
                removeFromFavoritesHandler={(name) =>
                  dispatch(removeFromFavorites({ name: name }))
                }
                {...product}
              />
            );
          })}
        </SimpleGrid>
      )}
    </Container>
  );
};
