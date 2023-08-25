// Components
import Link from 'next/link';
import { Button } from '/src/shared/UI/Button';
import { SearchInput } from './UI/SearchInput/SearchInput';
// Hooks
import { useRouter } from 'next/router';
import { useSearchInput } from './lib';
// Styles
import './styles.css';

export const Search = () => {
  const [input, openInput] = useSearchInput();


  const router = useRouter();
  const linkPath = router.pathname === '/search' ? '/' : '/search';
  return (
    <div className="search">
      <div className="search__button">
        <Link href={linkPath}>
          <Button onClickHandler={openInput} buttonStyle="search" />
        </Link>
      </div>
      {input && (
        <div className="search__input-wrapper">
          <SearchInput />
        </div>
      )}
    </div>
  );
};
