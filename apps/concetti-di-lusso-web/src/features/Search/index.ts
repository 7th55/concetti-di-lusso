// Component
export { Search } from './Search';

// Store
export {
  searchSlice,
  searching,
  changeValue,
  useSearchOpen,
  useSearchInputValue,
} from './store/searchSlice';

// Api
export { searchApi } from './api/searchApi';
export { stringForQuery } from './lib';
