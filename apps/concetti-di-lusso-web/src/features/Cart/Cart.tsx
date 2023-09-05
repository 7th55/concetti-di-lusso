// Hooks
import { useDispatch } from 'react-redux';
import {
  addItemToCart,
  deleteItemFromCart,
  removeItemFromCart,
  useCart,
} from './store/cartSlice';
import { useGetProductsByNameQuery } from './api/CartApi';
// Components
import Image from 'next/image';
import {
  Card,
  SimpleGrid,
  Container,
  Center,
  Text,
  Button,
  Title,
  Group,
  Box,
} from '@mantine/core';
// Icons
// Types
import { ProductCard, ProductData } from '/src/entities/ProductCard';
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
  return (
    <section>
      <Container size={1440}>
        {cartState.items.length !== 0 && (
          <Title order={2}>
            Total Price Of Products: {cartState.totalPrice}
          </Title>
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
            {data.map((product: ProductData, index: number) => {
              const count = getCount(product);
              const totalPriceOfProduct = getPrice(product);
              const priceOfProduct = product.price;
              return (
                <ProductCard
                  key={product.id}
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
                  {...product}
                />
                //     <Card
                //       key={product + ' ' + index}
                //       shadow="sm"
                //       padding="lg"
                //       radius="md"
                //       withBorder
                //     >
                //       <Card.Section>
                //         <Box
                //           sx={{
                //             position: 'relative',
                //             width: '100%',
                //             height: 250,
                //           }}
                //         >
                //           <Image
                //             fill={true}
                //             src={product.img.src}
                //             alt={product.img.alt}
                //             sizes="(max-width: 1430px) 100%"
                //             priority={true}
                //           />
                //         </Box>
                //       </Card.Section>
                //       <Group>
                //         <Title order={3}>{product.name}</Title>
                //       </Group>
                //       <Text variant="h6" component="p">
                //         Price: {priceOfProduct};
                //         <br />
                //         Quantity: {count};
                //         <br />
                //         Total Price Of Product: {totalPriceOfProducts}
                //       </Text>
                //       <Button
                //         color="green"
                //         onClick={() => {
                //           dispatch(
                //             addItemToCart({
                //               name: product.name,
                //               price: product.price,
                //             })
                //           );
                //         }}
                //       >
                //         Add
                //       </Button>
                //       <Button
                //         color="orange"
                //         onClick={() => {
                //           dispatch(
                //             removeItemFromCart({
                //               name: product.name,
                //               price: product.price,
                //             })
                //           );
                //         }}
                //       >
                //         Remove
                //       </Button>
                //       <Button
                //         color="red"
                //         onClick={() => {
                //           dispatch(deleteItemFromCart({ name: product.name }));
                //         }}
                //       >
                //         Delete
                //       </Button>
                //     </Card>
                //   );
                // }
              );
            })}
          </SimpleGrid>
        )}
      </Container>
    </section>
  );
};
