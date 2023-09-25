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
import { SimpleGrid } from '@mantine/core';
import { Error } from '/src/shared/UI/Error';
// Types
import { ProductCard, ProductData } from '/src/entities/ProductCard';
import { productsByNameQuery } from '/src/shared/lib/lib';
import { Loading } from '/src/shared/UI/Loading';

export const Cart = () => {
  const dispatch = useDispatch();
  const cartState = useCart();
  const productsFromCart = cartState.items;

  const getCount = (fetchedProduct: ProductData) =>
    productsFromCart.find((i) => i.name === fetchedProduct.name)?.count;
  const getPrice = (fetchedProduct: ProductData) =>
    productsFromCart.find((i) => i.name === fetchedProduct.name)?.price;

  const query = productsByNameQuery(productsFromCart);
  const { data, isLoading, isError, isSuccess, error } =
    useGetProductsByNameQuery(query);

  return (
    <section>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error message="Error" />
      ) : (
        <SimpleGrid cols={4}>
          {isSuccess &&
            data.map((fetchedProduct: ProductData, index: number) => {
              const quantity = getCount(fetchedProduct);
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
                  quantity={quantity}
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
