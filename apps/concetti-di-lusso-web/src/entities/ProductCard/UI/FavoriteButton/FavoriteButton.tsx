import { ActionIcon } from '@mantine/core';
import React from 'react';
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
      sx={{
        position: 'absolute',
        top: -15,
        right: -15,
      }}
    >
      <Heart width={50} height={50} />
    </ActionIcon>
  );
};
