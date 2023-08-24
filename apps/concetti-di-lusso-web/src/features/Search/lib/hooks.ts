// Hooks
import { useEffect, useState, useTransition } from 'react';
import { useDispatch } from 'react-redux';
// Store
import { searching } from '/src/features/Search/store/searchSlice';
import { useRouter } from 'next/router';

export const useSearchInput: () => [
  boolean,
  'searchInputAnimation_close' | '',
  () => void,
  () => void,
  (e: 'open' | 'close') => void
] = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const searchingPage = router.pathname === '/search';

  useEffect(() => {
    if (searchingPage) {
      dispatch(searching(true));
    }
  }, [searchingPage, dispatch]);

  const [input, setInput] = useState(searchingPage);

  // Анимации:
  // Добавляет или удаляет close анимацию
  const [closeAnimation, setCloseAnimation] = useState<
    'searchInputAnimation_close' | ''
  >('');
  // Отключает возможность прервать анимацию
  const [animationEnd, setAnimationEnd] = useState({
    open: true,
    close: true,
  });

  const openInput: () => void = () => {
    const endOfAnimations = animationEnd.open && animationEnd.close;

    // DobuleClick fix
    const open = !searchingPage && input === false && endOfAnimations;
    const close = searchingPage && input === true && endOfAnimations;

    if (open) {
      setInput(true);
      dispatch(searching(true));
      setAnimationEnd((an) => (an = { ...an, open: false }));
    }
    if (close) {
      setAnimationEnd((an) => (an = { ...an, close: false }));
      setCloseAnimation('searchInputAnimation_close');
    }
  };

  const animationEndHandler = (e: 'open' | 'close'): void => {
    e === 'open' &&
      setAnimationEnd(
        (an) =>
          (an = {
            ...an,
            open: true,
          })
      );

    if (e === 'close') {
      setCloseAnimation('');
      setAnimationEnd(
        (an) =>
          (an = {
            ...an,
            close: true,
          })
      );
    }
  };

  const closeInput = () => {
    setInput(false);
    dispatch(searching(false));
  };

  return [input, closeAnimation, openInput, closeInput, animationEndHandler];
};
