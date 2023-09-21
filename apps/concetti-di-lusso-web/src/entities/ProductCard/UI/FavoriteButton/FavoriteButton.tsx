// Components
import { ActionIcon } from '@mantine/core';
// Styles
import classes from './styles.module.scss';
// Icons
import { Heart } from 'tabler-icons-react';

export const FavoriteButton = ({
  onClickHandler,
}: {
  onClickHandler: () => void;
}) => {
  return (
    <ActionIcon
      variant="filled"
      className={classes.button}
      onClick={onClickHandler}
      radius="sm"
      size="md"
    >
      <Heart />
    </ActionIcon>
  );
};
