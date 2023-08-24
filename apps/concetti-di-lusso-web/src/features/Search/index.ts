// Component
export { Search } from './Search';

// Store
export {
  searchSlice,
  searching,
  changeValue,
  useSearchOpen as searchOpen,
  useSearchInputValue as searchInputValue,
} from './store/searchSlice';

export {
  searchAnimationsSlice,
  useSearchAnimationsInput,
  inputAnimationRun,
} from './store/searchAnimationsSlice';
// Api
export { searchApi } from './api/searchApi';
export { stringForQuery } from './lib';
