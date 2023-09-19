import { Button } from '@mantine/core';
// Styles
import classes from './styles.module.scss';

export const MantineButton = ({
  children,
  variant,
  onClickHandler,
  icon,
}: {
  children?: string | React.ReactNode;
  variant: string;
  icon?: string;
  onClickHandler?: () => void;
}) => {
  let buttonClass;
  switch (variant) {
    case 'addCart':
      buttonClass = classes.addCart;
      break;
    case 'signIn':
      buttonClass = classes.signIn;
      break;
    case 'square':
      buttonClass = classes.square;
      break;
  }

  const iconClass = icon ? classes[icon] : null;

  return (
    <Button onClick={onClickHandler} className={`${buttonClass} ${iconClass}`}>
      {children}
    </Button>
  );
};
