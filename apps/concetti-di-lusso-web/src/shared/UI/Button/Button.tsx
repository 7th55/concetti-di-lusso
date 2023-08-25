// Types
import { ButtonType } from '/src/shared/types';
// Styles
import './styles.css';
import { buttonStylesClass } from '/src/shared/lib/buttonStyles';

export const Button = ({
  onClickHandler,
  buttonStyle,
  buttonName,
  children,
}: {
  onClickHandler?: () => void;
  buttonStyle: ButtonType;
  buttonName?: string;
  children?: string;
}) => {
  const shopNow = buttonStyle === 'shopNow' || buttonStyle === 'shopNowBlack';

  const buttonStylesClassName = buttonStylesClass(buttonStyle);

  const shopNowText = shopNow ? true : undefined;

  return (
    <div className="button">
      <button
        name={buttonName}
        className={buttonStylesClassName}
        onClick={() => onClickHandler && onClickHandler()}
      >
        <div className={shopNowText && 'button__shop-now-text'}>{children}</div>
      </button>
    </div>
  );
};
