// Components
// TODO: Добавить стили на 1024px для всех элементов компонента
import { Button } from '/src/shared/UI/Button';
import { SearchInputAnimation } from './UI/SearchInputAnimation';
import { SearchInput } from './UI/SearchInput/SearchInput';
// Hooks
import { useSearchInput } from './lib';
// Styles
import { buttonStylesClass } from '/src/shared/lib/buttonStyles';
import './styles.css';

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
