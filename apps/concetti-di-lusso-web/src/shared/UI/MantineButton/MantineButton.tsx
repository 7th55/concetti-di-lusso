import { Button } from '@mantine/core';
// Styles
import { useStyles } from './styles';

export const MantineButton = ({
  children,
  variant,
  onClickHandler,
}: {
  children: string | React.ReactNode;
  variant: string;
  onClickHandler?: () => void;
}) => {
  const { classes } = useStyles();
  let buttonClass;
  switch (variant) {
    case 'addCart':
      buttonClass = classes.addCart;
      break;
    case 'signIn':
      buttonClass = classes.signIn;
      break;
  }

  return (
    <Button onClick={onClickHandler} className={buttonClass}>
      {children}
    </Button>
  );
};
