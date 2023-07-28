// Styles
import './styles.css';
import { ButtonStylesReturnType } from '/src/shared/types';

export const Button = ({
  buttonStylesClassName,
  children,
}: {
  buttonStylesClassName: ButtonStylesReturnType;
  children?: string;
}) => {
  const shopNowText =
    buttonStylesClassName ===
    ('button__shop-now-button' ||
      'button__shop-now-button button__shop-now-button_hover')
      ? true
      : undefined;

  return (
    <button className="button">
      <div className={buttonStylesClassName}>
        <div className={shopNowText && 'button__shop-now-text'}>{children}</div>
      </div>
    </button>
  );
};
