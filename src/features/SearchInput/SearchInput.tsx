import { useState } from 'react';
// Components
import { Button } from '/src/shared/UI/Button';
// Styles
import { buttonStylesClass } from '/src/shared/lib/buttonStyles';
import './styles.css';

export const SearchInput = () => {
  const [input, setInput] = useState(false);
  const [inputAnimation, setAnimation] = useState('');

  // Анимации:
  // Фиксит блики
  const [leftPosition, setLeftPosition] = useState(0);
  // Отключает возможность прервать анимацию
  const [animationEnd, setAnimationEnd] = useState({
    open: true,
    close: true,
  });
  
  const openCloseInputHandler = () => {
    if (input === false && animationEnd.open && animationEnd.close) {
      setInput(true);
      setAnimationEnd((an) => (an = { ...an, open: false }));
    }
    if (input === true && animationEnd.open && animationEnd.close) {
      setAnimationEnd((an) => (an = { ...an, close: false }));
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
              e.animationName === 'close' && setLeftPosition(2000);
            }}
            onAnimationEnd={(e) => {
              e.animationName === 'open' &&
                setAnimationEnd(
                  (an) =>
                    (an = {
                      ...an,
                      open: true,
                    })
                );
              if (e.animationName === 'close') {
                setInput(false);
                setAnimation('');
                setLeftPosition(0);
                setAnimationEnd(
                  (an) =>
                    (an = {
                      ...an,
                      close: true,
                    })
                );
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
