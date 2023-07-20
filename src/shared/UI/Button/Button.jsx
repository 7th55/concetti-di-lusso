import './styles.css';

export const Button = ({ buttonType, children, hoverStyle }) => {
  const buttonStyle = (config) => {
    let { type, hover } = config;
    let buttonClass;

    switch (type) {
      case 'menuButton':
        buttonClass = 'button__menu-button';
        break;
      default:
        '';
    }

    hover && (buttonClass = `${buttonClass} ${buttonClass}_hover`);

    return buttonClass;
  };

  const buttonClassName = buttonStyle({ type: buttonType, hover: hoverStyle });

  return (
    <button className="button">
      <div className={buttonClassName}>{children}</div>
    </button>
  );
};
