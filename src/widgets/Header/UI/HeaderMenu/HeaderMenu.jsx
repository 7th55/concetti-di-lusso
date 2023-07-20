import { useState } from 'react';
// Components
import { Button } from '/src/shared/UI/Button';
// Styles
import './styles.css';
import { HoverButton } from '/src/shared/UI/HoverButton';

export const HeaderMenu = ({
  items = ['Home', 'Towels', 'Robes', 'Bathroom Sets'],
}) => {
  return (
    <>
      <div className="header__menu-list">
        {items.map((item) => (
          <div key={item} className="header__menu-item">
            <HoverButton
              button={
                <Button buttonType={'menuButton'} hoverStyle={false}>
                  {item}
                </Button>
              }
              hoverButton={
                <Button buttonType={'menuButton'} hoverStyle={true}>
                  {item}
                </Button>
              }
              buttonTextContent={item}
            />
          </div>
        ))}
      </div>
    </>
  );
};
