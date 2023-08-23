// Component
export { Search } from './Search';

// Store
export {
  searchSlice,
  toggle,
  changeValue,
  useSearchOpen as searchOpen,
  useSearchInputValue as searchInputValue,
} from './store/searchSlice';

export {
  searchAnimationsSlice,
  useSearchAnimationsInput as searchAnimationsInput,
  toggleClose,
} from './store/searchAnimationsSlice';
// Api
export { searchApi } from './api/searchApi';
export { stringForQuery } from './lib';
