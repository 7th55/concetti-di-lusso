import { Button } from '@mantine/core';
// Styles
import { useStyles } from './styles';

export const MantineButton = ({
  children,
  variant,
  onClickHandler,
  icon,
  activeIcon,
}: {
  children?: string | React.ReactNode;
  variant: string;
  icon?: string;
  activeIcon?: string;
  onClickHandler?: () => void;
}) => {
  const { classes } = useStyles({
    icon,
    activeIcon,
  });

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

  return (
    <Button onClick={onClickHandler} className={buttonClass}>
      {children}
    </Button>
  );
};
