import { useState } from 'react';
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
  // Фиксит блики
  const [leftPosition, setLeftPosition] = useState(0);

  return (
    <div className="searchInputAnimation">
      <div
        style={{ left: `${leftPosition}px` }}
        className={`searchInputAnimation searchInputAnimation_open ${inputAnimation}`}
        onAnimationStart={(e) => {
          e.animationName === 'close' && setLeftPosition(2000);
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
