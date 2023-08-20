// Components
import { Select } from '/src/shared/UI/Select';
import { Button } from '/src/shared/UI/Button';
// Styles
import './styles.css';
import { HoverButton } from '/src/shared/UI/HoverButton';
import { buttonStylesClass } from '/src/shared/lib/buttonStyles';

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
                  <Button
                    buttonStylesClassName={buttonStylesClass({
                      type: 'menu',
                      hover: false,
                    })}
                  >
                    {item}
                  </Button>
                }
                hoverButton={
                  <Button
                    buttonStylesClassName={buttonStylesClass({
                      type: 'menu',
                      hover: true,
                    })}
                  >
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
                      <Button
                        buttonStylesClassName={buttonStylesClass({
                          type: 'select',
                          hover: false,
                        })}
                      >
                        {item}
                      </Button>
                    }
                    hoverButton={
                      <Button
                        buttonStylesClassName={buttonStylesClass({
                          type: 'select',
                          hover: true,
                        })}
                      >
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
