// Styles
import { buttonStyle } from '/src/shared/lib/buttonStyles';
import './styles.css';

export const Button = ({ buttonType, children, hoverStyle }) => {
  const buttonClassName = buttonStyle({ type: buttonType, hover: hoverStyle });

  return (
    <button className="button">
      <div className={buttonClassName}>{children}</div>
    </button>
  );
};
