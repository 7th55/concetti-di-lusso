import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggle } from '../store/searchSlice';

export const useSearchInput: () => [
  boolean,
  string,
  () => void,
  () => void,
  (e: 'open' | 'close') => void
] = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(false);

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
      dispatch(toggle());
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
    dispatch(toggle());
  };

  return [input, closeAnimation, openInput, closeInput, animationEndHandler];
};
