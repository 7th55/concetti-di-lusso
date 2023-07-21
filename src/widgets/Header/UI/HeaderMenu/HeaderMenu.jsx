// Components
import { Select } from '/src/shared/UI/Select';
import { Button } from '/src/shared/UI/Button';
// Styles
import './styles.css';
import { HoverButton } from '/src/shared/UI/HoverButton';

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
              <HoverButton
                button={
                  <Button buttonType={'menu'} hoverStyle={false}>
                    {item}
                  </Button>
                }
                hoverButton={
                  <Button buttonType={'menu'} hoverStyle={true}>
                    {item}
                  </Button>
                }
                buttonTextContent={item}
              />
            ) : (
              <Select
                options={[
                  <HoverButton
                    button={
                      <Button buttonType={'select'} hoverStyle={false}>
                        {item}
                      </Button>
                    }
                    hoverButton={
                      <Button buttonType={'select'} hoverStyle={true}>
                        {item}
                      </Button>
                    }
                    buttonTextContent={item}
                  />,
                ]}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};
