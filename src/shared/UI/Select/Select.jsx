import { useState } from 'react';
import './styles.css';

export const Select = ({ options }) => {
  return (
    <div className="select">
      {options.map((optionsItem) => (
        <div className="select__options">{optionsItem}</div>
      ))}
    </div>
  );
};
