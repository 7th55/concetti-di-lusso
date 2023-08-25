// Hooks
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// Store
import { searching } from '/src/features/Search/store/searchSlice';
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

  const [input, setInput] = useState(searchingPage);

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
