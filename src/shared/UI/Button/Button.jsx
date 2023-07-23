// Styles
import { buttonStyle } from '/src/shared/lib/buttonStyles';
import './styles.css';

export const Button = ({ buttonType, children, hoverStyle }) => {
  const buttonClassName = buttonStyle({ type: buttonType, hover: hoverStyle });
  const shopNowText =
    buttonClassName ===
    ('button__shop-now-button' ||
      'button__shop-now-button button__shop-now-button_hover');

  return (
    <button className="button">
      <div className={buttonClassName}>
        <div className={shopNowText && 'button__shop-now-text'}>{children}</div>
      </div>
    </button>
  );
};
