// Hooks
import { useDispatch } from 'react-redux';
import {
  addItemToCart,
  deleteItemFromCart,
  removeItemFromCart,
  useCart,
} from './store/store/CartSlice';
import { useGetProductsByNameQuery } from './api/CartApi';
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
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ClearTwoTone from '@mui/icons-material/ClearTwoTone';
// Types
import { ProductData } from '/src/entites/ProductCard';
import { ProductFromCart } from '/src/shared/types';

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
  const dispatch = useDispatch();
  const cartState = useCart();
  const products = cartState.items;

  const getNames = (i: ProductFromCart): ProductFromCart['name'] => i.name;
  const getCount = (product: ProductData) =>
    products.find((i) => i.name === product.name)?.count;
  const getPrice = (product: ProductData) =>
    products.find((i) => i.name === product.name)?.price;

  const productNames = products.map(getNames);

  const query = productNames.map(searchByNameFormatter).join('');

  const { data, isLoading, isError } = useGetProductsByNameQuery(query);
// Создать styled компоненты
  return (
    <section>
      <Container maxWidth={false} sx={{ maxWidth: '1488px' }}>
        <Stack spacing={2} sx={{ boxSizing: 'border-box', mb: 2 }}>
          {cartState.items.length !== 0 && (
            <Box
              sx={{
                boxSizing: 'border-box',
                padding: 2,
                width: '100%',
                backgroundColor: 'secondary.main',
                borderRadius: '10px',
              }}
            >
              <Typography variant="h4">
                Total Price Of Products: {cartState.totalPrice}
              </Typography>
            </Box>
          )}

          {cartState.items.length === 0 && (
            <Box
              sx={{
                boxSizing: 'border-box',
                padding: 2,
                width: '100%',
                backgroundColor: 'secondary.main',
                borderRadius: '10px',
              }}
            >
              <Typography variant="h4">Add Products to Cart</Typography>
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
              const count = getCount(product);
              const totalPriceOfProducts = getPrice(product);
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
                      <br />
                      Quantity: {count};
                      <br />
                      Total Price Of Product: {totalPriceOfProducts}
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
                      color="success"
                      variant="contained"
                      onClick={() => {
                        dispatch(
                          addItemToCart({
                            name: product.name,
                            price: product.price,
                          })
                        );
                      }}
                    >
                      <AddIcon />
                    </Button>
                    <Button
                      color="warning"
                      variant="contained"
                      onClick={() => {
                        dispatch(
                          removeItemFromCart({
                            name: product.name,
                            price: product.price,
                          })
                        );
                      }}
                    >
                      <RemoveIcon />
                    </Button>
                    <Button
                      color="error"
                      variant="contained"
                      onClick={() => {
                        dispatch(deleteItemFromCart({ name: product.name }));
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
