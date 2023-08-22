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
  const shopNow =
    'button__shop-now-button' ||
    'button__shop-now-button button__shop-now-button_hover';
  const shopNowBlack =
    'button__shop-now-button_black' ||
    'button__shop-now-button_black button__shop-now-button_black_hover';

  const shopNowText =
    buttonStylesClassName === shopNow
      ? true
      : buttonStylesClassName === shopNowBlack
      ? true
      : undefined;

  return (
    <div className="button">
      <div className={buttonStylesClassName}>
        <div className={shopNowText && 'button__shop-now-text'}>{children}</div>
      </div>
    </div>
  );
};
