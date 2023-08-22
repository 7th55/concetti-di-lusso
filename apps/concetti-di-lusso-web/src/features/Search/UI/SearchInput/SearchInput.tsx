import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeValue } from '/src/features/Search/store/searchSlice';

export const SearchInput = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(changeValue(''));
    };
  }, []);

  return (
    <input
      className="search__input"
      value={inputValue}
      onChange={(e) => {
        dispatch(changeValue(e.target.value));
        setInputValue(e.target.value);
      }}
    />
  );
};
