// Components
import { useEffect } from 'react';
import { Cart } from '/src/features/Cart/Cart';
import { setCartState,  useCart } from '/src/features/Cart/store/store/CartSlice';
import { useDispatch } from 'react-redux';

export default function Page() {


  return <Cart />;
}
