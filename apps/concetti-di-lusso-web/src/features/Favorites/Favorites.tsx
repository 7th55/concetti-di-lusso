// Hooks
import { useDispatch } from 'react-redux';
import { useGetProductsByNameQuery } from './api/FavoritesApi';
// Components
import Image from 'next/image';
import {
  Box,
  Button,
  Container,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
// Icons
import ClearTwoTone from '@mui/icons-material/ClearTwoTone';
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
    <section>
      <Container maxWidth={false} sx={{ maxWidth: '1488px' }}>
        <Stack spacing={2} sx={{ boxSizing: 'border-box', mb: 2 }}>
          {favoritesState.items.length === 0 && (
            <Box
              sx={{
                boxSizing: 'border-box',
                padding: 2,
                width: '100%',
                backgroundColor: 'secondary.main',
                borderRadius: '10px',
              }}
            >
              <Typography variant="h4">Add Favorite Products</Typography>
            </Box>
          )}

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
              // const count = getCount(product);
              // const totalPriceOfProducts = getPrice(product);
              const priceOfProduct = product.price;
              return (
                <Box
                  key={product + ' ' + index}
                  sx={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    gap: 2,
                    width: '100%',
                    backgroundColor: 'secondary.main',
                    boxShadow: 2,
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      width: 1 / 4,
                      height: 1 / 4,
                      minWidth: 300,
                      minHeight: 300,
                      position: 'relative',
                      overflow: 'hidden',
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

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      width: 1,
                    }}
                  >
                    <Typography variant="h6" component="h3">
                      {product.name}
                    </Typography>
                    <Typography variant="h6" component="p">
                      Price: {priceOfProduct};
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'right',
                      alignItems: 'start',
                      width: 1 / 3,
                    }}
                  >
                    <Button
                      color="error"
                      variant="contained"
                      onClick={() => {
                        dispatch(removeFromFavorites({ name: product.name }));
                      }}
                    >
                      <ClearTwoTone sx={{ color: 'white' }} />
                    </Button>
                  </Box>
                </Box>
              );
            })
          )}
        </Stack>
      </Container>
    </section>
  );
};
