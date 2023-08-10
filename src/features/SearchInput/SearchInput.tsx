import { useState } from 'react';
// Components
import { Button } from '/src/shared/UI/Button';
// Styles
import { buttonStylesClass } from '/src/shared/lib/buttonStyles';
import './styles.css';

export const SearchInput = () => {
  const [input, setInput] = useState(false);
  const [inputAnimation, setAnimation] = useState('');
  // Фиксит блики
  const [leftPosition, setLeftPosition] = useState(0);
  // Починить
  const [animationEnd, setAnimationEnd] = useState(true);

  const openCloseInputHandler = () => {
    if (input === false && animationEnd) {
      setInput(true);
      setAnimationEnd(false);
    }
    if (input === true) {
      setAnimationEnd(false);
      setAnimation('searchInput__input_close-animation');
    }
  };

  return (
    <div className="searchInput">
      <button className="searchInput__button" onClick={openCloseInputHandler}>
        <Button
          buttonStylesClassName={buttonStylesClass({
            type: 'search',
            hover: false,
          })}
        />
      </button>
      {input && (
        <div className="searchInput__input-wrapper">
          <input
            style={{ left: `${leftPosition}px` }}
            onAnimationStart={(e) => {
              e.animationName === 'close' && setLeftPosition(3000);
            }}
            onAnimationEnd={(e) => {
              if (e.animationName === 'close') {
                setInput(false);
                setAnimation('');
                setLeftPosition(0);
                setAnimationEnd(true);
              }
            }}
            onAnimationIteration={(e) => console.log(e)}
            className={`searchInput__input ${inputAnimation}`}
          />
        </div>
      )}
    </div>
  );
};
