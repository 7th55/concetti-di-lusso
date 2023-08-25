// Components
import Link from 'next/link';
import { Button } from '/src/shared/UI/Button';
import { SearchInputAnimation } from './UI/SearchInputAnimation';
import { SearchInput } from './UI/SearchInput/SearchInput';
// Hooks
import { usePageAnimationsPage } from '/src/shared/store/pageAnimationSlice';
import { useRouter } from 'next/router';
import { useSearchInput } from './lib';
// Styles
import './styles.css';

export const Search = () => {
  const [input, closeAnimation, openInput, closeInput, animationEndHandler] =
    useSearchInput();

  // Fix: Doubleclick Fix
  const pageAnimationRun = usePageAnimationsPage().animationRun;

  const router = useRouter();
  const linkPath = router.pathname === '/search' ? '/' : '/search';
  return (
    <div className="search">
      <div
        style={{
          pointerEvents: pageAnimationRun ? 'none' : 'initial',
        }}
        className="search__button"
      >
        <Link
          style={{
            pointerEvents: pageAnimationRun ? 'none' : 'initial',
          }}
          href={linkPath}
        >
          <Button onClickHandler={openInput} buttonStyle="search" />
        </Link>
      </div>
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
