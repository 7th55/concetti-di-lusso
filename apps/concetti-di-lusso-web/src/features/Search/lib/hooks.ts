// Hooks
import {
  useEffect,
  useInsertionEffect,
  useLayoutEffect,
  useState,
  useTransition,
} from 'react';
import { useDispatch } from 'react-redux';
// Store
import {
  searching,
  useSearchOpen,
} from '/src/features/Search/store/searchSlice';
import { useRouter } from 'next/router';

export const useSearchInput: () => [boolean, () => void] = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const searchingPage = router.pathname === '/search';

  useEffect(() => {
    if (searchingPage) {
      dispatch(searching(true));
    }
  }, [searchingPage, dispatch]);

  const searchingValue = useSearchOpen() === false ? false : true;

  const [input, setInput] = useState(searchingPage);
  console.log(input, 'input', searchingValue);

  const openInput: () => void = () => {
    const open = !input;
    const close = input;
    if (open) {
      setInput(true);
      dispatch(searching(false));
    }
    if (close) {
      setInput(false);
      dispatch(searching(false));
    }
  };

  return [input, openInput];
};
