// Hooks
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// Store
import { toggle } from '/src/features/Search/store/searchSlice';
import { useRouter } from 'next/router';

export const useSearchInput: () => [
  boolean,
  string,
  () => void,
  () => void,
  (e: 'open' | 'close') => void
] = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = router.pathname === '/search';

  if (pathname) {
    dispatch(toggle(true));
  }

  const [input, setInput] = useState(pathname);

  // Анимации:
  // Добавляет или удаляет close анимацию
  const [closeAnimation, setCloseAnimation] = useState('');
  // Отключает возможность прервать анимацию
  const [animationEnd, setAnimationEnd] = useState({
    open: true,
    close: true,
  });

  const openInput: () => void = () => {
    const endOfAnimations = animationEnd.open && animationEnd.close;

    const open = input === false && endOfAnimations;
    const close = input === true && endOfAnimations;

    if (open) {
      setInput(true);
      dispatch(toggle(true));
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
    dispatch(toggle(false));
  };

  return [input, closeAnimation, openInput, closeInput, animationEndHandler];
};