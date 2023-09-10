// Hooks
import { useDispatch } from 'react-redux';
import {
  addItemToCart,
  deleteItemFromCart,
  removeItemFromCart,
  useCart,
} from './store/cartSlice';
import { useGetProductsByNameQuery } from '/src/shared/api/concettiDiLussoApi';
// Components
import { SimpleGrid, Text, Title, Box } from '@mantine/core';
// Types
import { ProductCard, ProductData } from '/src/entities/ProductCard';
import { productsByNameQuery } from '/src/shared/lib/lib';

export const Cart = () => {
  const dispatch = useDispatch();
  const cartState = useCart();
  const productsFromCart = cartState.items;

  const getCount = (fetchedProduct: ProductData) =>
    productsFromCart.find((i) => i.name === fetchedProduct.name)?.count;
  const getPrice = (fetchedProduct: ProductData) =>
    productsFromCart.find((i) => i.name === fetchedProduct.name)?.price;

  const query = productsByNameQuery(productsFromCart);
  const { data, isLoading, isError, isSuccess } =
    useGetProductsByNameQuery(query);
    console.log(data, productsFromCart)
  return (
    <section>
      {cartState.items.length !== 0 && (
        <Title order={2}>Total Price Of Products: {cartState.totalPrice}</Title>
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
          <Title order={2}>Add Products to Cart</Title>
        </Box>
      )}

      {isLoading ? (
        <Box sx={{ width: '100%' }}>Loading</Box>
      ) : isError ? (
        <Box sx={{ width: '100%' }}>
          <Text>Error</Text>
        </Box>
      ) : (
        <SimpleGrid cols={4}>
          {isSuccess &&
            data.map((fetchedProduct: ProductData, index: number) => {
              const count = getCount(fetchedProduct);
              const totalPriceOfProduct = getPrice(fetchedProduct);
              const priceOfProduct = fetchedProduct.price;
              return (
                <ProductCard
                  key={fetchedProduct.id}
                  variant="cartCard"
                  increaseHandler={(name, price) =>
                    dispatch(
                      addItemToCart({
                        name: name,
                        price: price,
                      })
                    )
                  }
                  decreaseHandler={(name, price) =>
                    dispatch(
                      removeItemFromCart({
                        name: name,
                        price: price,
                      })
                    )
                  }
                  deleteFromCartHandler={(name) =>
                    dispatch(deleteItemFromCart({ name: name }))
                  }
                  count={count}
                  totalPriceOfProduct={totalPriceOfProduct}
                  {...fetchedProduct}
                />
              );
            })}
        </SimpleGrid>
      )}
    </section>
  );
};
