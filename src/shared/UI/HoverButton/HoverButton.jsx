import { useState } from 'react';
// Styles
import './styles.css';

const HideBackgroundComponent = ({ children, hover }) => (
  <div style={{ opacity: hover && 0 }}>{children}</div>
);

const HoverComponent = ({ children, hover, stringContent }) =>
  hover && (
    <div
      className={`hoverButton_hover
             ${stringContent ? 'hoverButton_hover-big' : ''}
            `}
    >
      {children}
    </div>
  );

const HoverButton = ({ button, hoverButton, buttonTextContent }) => {
  const [hover, setHover] = useState(false);
  const stringContent = buttonTextContent.length > 12;

  return (
    <div
      className="hoverButton"
      onPointerOver={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <HideBackgroundComponent hover={hover}>{button}</HideBackgroundComponent>
      <HoverComponent hover={hover} stringContent={stringContent}>
        {hoverButton}
      </HoverComponent>
    </div>
  );
};

export default HoverButton;
