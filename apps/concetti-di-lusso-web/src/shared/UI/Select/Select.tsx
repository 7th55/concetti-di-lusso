import './styles.css';
export const Select = ({ options }: { options: Array<string> }) => {
  return (
    <div className="select">
      {options.map((optionsItem) => (
        <div key={optionsItem} className="select__options">
          {optionsItem}
        </div>
      ))}
    </div>
  );
};
