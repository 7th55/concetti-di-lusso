// Hooks
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// Store
import { changeValue } from '/src/features/Search/store/searchSlice';

export const SearchInput = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  // Сброс значения поля
  useEffect(() => {
    return () => {
      dispatch(changeValue(''));
    };
  }, []);

  return (
    <input
      id="searchInput"
      className="search__input"
      value={inputValue}
      onChange={(e) => {
        dispatch(changeValue(e.target.value));
        setInputValue(e.target.value);
      }}
    />
  );
};
