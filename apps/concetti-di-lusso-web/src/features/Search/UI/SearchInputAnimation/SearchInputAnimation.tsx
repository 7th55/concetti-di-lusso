// Hooks
import { useState } from 'react';
// Store
import { useDispatch } from 'react-redux';
import { toggleClose } from '/src/features/Search';
// Styles
import './styles.css';

export const SearchInputAnimation = ({
  children,
  inputAnimation,
  animationEndHandler,
  closeInput,
}: {
  children: React.ReactNode;
  inputAnimation: 'searchInputAnimation__input_close-animation' | '' | string;
  animationEndHandler: (a: 'open' | 'close') => void;
  closeInput: () => void;
}) => {
  const dispatch = useDispatch();
  // Фиксит блики
  const [leftPosition, setLeftPosition] = useState(0);

  return (
    <div className="searchInputAnimation">
      <div
        style={{ left: `${leftPosition}px` }}
        className={`searchInputAnimation searchInputAnimation_open ${inputAnimation}`}
        onAnimationStart={(e) => {
          e.animationName === 'close' && setLeftPosition(2000);
          // Согласование анимации закрытия поля с анимциями хедера и лого
          e.animationName === 'close' && dispatch(toggleClose());
        }}
        onAnimationEnd={(e) => {
          animationEndHandler(e.animationName as 'open' | 'close');
          if (e.animationName === 'close') {
            setLeftPosition(0);
            closeInput();
          }
        }}
      >
        {children}
      </div>
    </div>
  );
};