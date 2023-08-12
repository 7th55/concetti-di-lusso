// Components
import { Button } from '/src/shared/UI/Button';
import { SearchInputAnimation } from './UI/SearchInputAnimation';
// Styles
import { buttonStylesClass } from '/src/shared/lib/buttonStyles';
import './styles.css';
import { useSearchInput } from './lib';

export const SearchInput = () => {
  const [input, closeAnimation, openInput, closeInput, animationEndHandler] =
    useSearchInput();

  return (
    <div className="searchInput">
      <button className="searchInput__button" onClick={openInput}>
        <Button
          buttonStylesClassName={buttonStylesClass({
            type: 'search',
            hover: false,
          })}
        />
      </button>
      {input && (
        <div className="searchInput__input-wrapper">
          <SearchInputAnimation
            inputAnimation={closeAnimation}
            animationEndHandler={animationEndHandler}
            closeInput={closeInput}
          >
            <input className="searchInput__input" />
          </SearchInputAnimation>
        </div>
      )}
    </div>
  );
};
