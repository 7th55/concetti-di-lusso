// Components
import { Select } from '/src/shared/UI/Select';
import { Button } from '/src/shared/UI/Button';
// Styles
import './styles.css';

export const HeaderMenu = ({
  items = ['Home', 'Towels', 'Robes', 'Bathroom Sets'],
}) => {
  const selectList = items.indexOf('Towels');

  return (
    <>
      <div className="header__menu-list">
        {items.map((item, index) => (
          <div key={item} className="header__menu-item">
            {selectList !== index ? (
              <Button buttonName={item} buttonStyle="menu">
                {item}
              </Button>
            ) : (
              <Select
                options={[
                  <Button key={item} buttonName={item} buttonStyle="select">
                    {item}
                  </Button>,
                ]}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};
