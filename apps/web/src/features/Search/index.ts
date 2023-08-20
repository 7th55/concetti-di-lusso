// Component
export { Search } from './Search.tsx';

// Store
export {
  searchSlice,
  toggle,
  changeValue,
  searchOpen,
  searchInputValue,
} from './store/searchSlice';

export {
  searchAnimationsSlice,
  searchAnimationsInput,
  toggleClose,
} from './store/searchAnimationsSlice';
// Api
export { searchApi } from './api/searchApi';
export { stringForQuery } from './lib';
