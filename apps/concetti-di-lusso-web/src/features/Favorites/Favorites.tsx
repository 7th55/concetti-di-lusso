// Hooks
import { useDispatch } from 'react-redux';
import { useGetProductsByNameQuery } from './api/FavoritesApi';
// Components
import Image from 'next/image';
import {
  Card,
  SimpleGrid,
  Container,
  Text,
  Button,
  Title,
  Group,
  Box,
} from '@mantine/core';
// Icons
// Types
import { ProductData } from '/src/entites/ProductCard';
import { removeFromFavorites, useFavorites } from './store/FavoritesSlice';

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
  // TODO:Создать styled компоненты
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
            const priceOfProduct = product.price;
            return (
              <Card
                key={product + ' ' + index}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <Card.Section>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: 250,
                    }}
                  >
                    <Image
                      fill={true}
                      src={product.img.src}
                      alt={product.img.alt}
                      sizes="(max-width: 1430px) 100%"
                      priority={true}
                    />
                  </Box>
                </Card.Section>
                <Group>
                  <Title order={3}>{product.name}</Title>
                </Group>
                <Text variant="h6" component="p">
                  Price: {priceOfProduct};
                </Text>
                <Button
                  color="red"
                  onClick={() => {
                    dispatch(removeFromFavorites({ name: product.name }));
                  }}
                >
                  Delete
                </Button>
              </Card>
            );
          })}
        </SimpleGrid>
      )}
    </Container>
  );
};
