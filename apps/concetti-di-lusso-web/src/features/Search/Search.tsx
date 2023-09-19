// Components
import Link from 'next/link';
import { MantineButton } from '/src/shared/UI/MantineButton';
import { SearchInput } from './UI/SearchInput/SearchInput';
// Hooks
import { useSearchState } from '.';
import { useRouter } from 'next/router';
// Styles
import './styles.css';

export const Search = () => {
  const searching = useSearchState();
  const router = useRouter();

  const linkPath = router.pathname === '/search' ? '/' : '/search';
  return (
    <div className="search">
      <div className="search__button">
        <Link href={linkPath}>
          <MantineButton variant="square" icon={'search'} />
        </Link>
      </div>
      {searching && (
        <div className="search__input-wrapper">
          <SearchInput />
        </div>
      )}
    </div>
  );
};
