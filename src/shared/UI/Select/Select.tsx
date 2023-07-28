import './styles.css';

export const Select = ({ options }: { options: any }) => {
  return (
    <div className="select">
      {options.map((optionsItem: any) => (
        <div className="select__options">{optionsItem}</div>
      ))}
    </div>
  );
};
