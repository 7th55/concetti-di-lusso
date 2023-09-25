// Hooks
import { useGetProductsByNameQuery } from './api/FavoritesApi';
// Components
import { SimpleGrid, Container, Title } from '@mantine/core';
import { ProductCard, ProductData } from '/src/entities/ProductCard';
import { Loading } from '/src/shared/UI/Loading';
import { Error } from '/src/shared/UI/Error';
// Types
import { removeFromFavorites, useFavorites } from './store/favoritesSlice';
import { useDispatch } from 'react-redux';
// Lib
import { searchByNameFormatter } from './lib/functions';

export const Favorites = () => {
  const dispatch = useDispatch();
  const favoritesState = useFavorites();
  const products = favoritesState.items;

  const getNames = (i: { name: string }) => i.name;

  const productNames = products.map(getNames);

  const query = productNames.map(searchByNameFormatter).join('');
  const { data, isLoading, isError, isSuccess } =
    useGetProductsByNameQuery(query);

  return (
    <Container size={1440}>
      {favoritesState.items.length === 0 && (
        <Title order={2}>Add Favorite Products</Title>
      )}

      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error message="Error" />
      ) : (
        <SimpleGrid cols={4}>
          {isSuccess &&
            data.map((product: ProductData, index: number) => {
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
