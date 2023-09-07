// Components
import { ActionIcon } from '@mantine/core';
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
      color="maroon"
      onClick={onClickHandler}
      radius="sm"
      size="md"
      sx={{
        position: 'absolute',
        top: -15,
        right: -15,
      }}
    >
      <Heart />
    </ActionIcon>
  );
};
