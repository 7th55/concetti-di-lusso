// Components
import Link from 'next/link';
import { Select } from '/src/shared/UI/Select';
import { Button } from '/src/shared/UI/Button';
// Styles
import './styles.css';

export const HeaderMenu = ({
  items = ['Home', 'Towels', 'Robes', 'Bathroom Sets'],
}) => {
  const selectList = items.indexOf('Towels');
  const paths = ['/', 'towels', 'robes', 'bathroomsets'];

  return (
    <>
      <div className="header__menu-list">
        {items.map((item, index) => (
          <div key={item} className="header__menu-item">
            {selectList !== index ? (
              <Link href={item === 'Home' ? '/' : `/products/${paths[index]}`}>
                <Button buttonName={item} buttonStyle="menu">
                  {item}
                </Button>
              </Link>
            ) : (
              <Link href={`/products/${paths[index]}`}>
                <Select
                  options={[
                    <Button key={item} buttonName={item} buttonStyle="select">
                      {item}
                    </Button>,
                  ]}
                />
              </Link>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
