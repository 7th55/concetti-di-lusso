// Components
import { Button } from '/src/shared/UI/Button';
import { SearchInputAnimation } from './UI/SearchInputAnimation';
// Hooks
import { useSearchInput } from './lib';
// Styles
import { buttonStylesClass } from '/src/shared/lib/buttonStyles';
import './styles.css';
import { SearchInput } from './UI/SearchInput/SearchInput';

export const Search = () => {
  const [input, closeAnimation, openInput, closeInput, animationEndHandler] =
    useSearchInput();

  return (
    <div className="search">
      <button className="search__button" onClick={openInput}>
        <Button
          buttonStylesClassName={buttonStylesClass({
            type: 'search',
            hover: false,
          })}
        />
      </button>
      {input && (
        <div className="search__input-wrapper">
          <SearchInputAnimation
            inputAnimation={closeAnimation}
            animationEndHandler={animationEndHandler}
            closeInput={closeInput}
          >
            <SearchInput />
          </SearchInputAnimation>
        </div>
      )}
    </div>
  );
};
