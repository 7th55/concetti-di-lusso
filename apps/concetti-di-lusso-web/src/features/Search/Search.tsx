// Components
import { Button } from '/src/shared/UI/Button';
import { SearchInputAnimation } from './UI/SearchInputAnimation';
import { SearchInput } from './UI/SearchInput/SearchInput';
// Hooks
import { useRouter } from 'next/router';
import { useSearchAnimationsInput } from './store/searchAnimationsSlice';
import { useSearchInput } from './lib';
// Styles
import { buttonStylesClass } from '/src/shared/lib/buttonStyles';
import './styles.css';
import Link from 'next/link';

export const Search = () => {
  const [input, closeAnimation, openInput, closeInput, animationEndHandler] =
    useSearchInput();

  // Fix: Doubleclick Fix
  const disableIfAnimationRun = useSearchAnimationsInput().close;

  const router = useRouter();
  const linkPath = router.pathname === '/search' ? '/' : '/search';
  return (
    <div className="search">
      <button
        disabled={disableIfAnimationRun}
        style={{
          pointerEvents: disableIfAnimationRun ? 'none' : 'initial',
        }}
        className="search__button"
        onClick={openInput}
      >
        <Link
          style={{
            pointerEvents: disableIfAnimationRun ? 'none' : 'initial',
          }}
          href={linkPath}
        >
          <Button
            buttonStylesClassName={buttonStylesClass({
              type: 'search',
              hover: false,
            })}
          />
        </Link>
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
