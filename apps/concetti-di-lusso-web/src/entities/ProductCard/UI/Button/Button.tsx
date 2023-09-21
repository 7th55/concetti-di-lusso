import { ActionIcon } from '@mantine/core';
// Icons
import { HeartOff, Minus, Plus, ShoppingCartOff } from 'tabler-icons-react';

export const Button = ({
  variant,
  onClickHandler,
}: {
  variant: 'increase' | 'decrease' | 'remove' | 'delete';
  onClickHandler: () => void;
}) => {
  let actionIcon: {
    variant: string;
    color: string;
  };
  let icon;

  switch (variant) {
    case 'increase':
      icon = <Plus size={48} strokeWidth={2} />;
      actionIcon = {
        variant: 'outline',
        color: 'green',
      };
      break;
    case 'decrease':
      icon = <Minus key="shoppingCartOff" size={48} strokeWidth={2} />;
      actionIcon = {
        variant: 'outline',
        color: 'orange',
      };
      break;
    case 'remove':
      icon = <HeartOff size={48} strokeWidth={2} />;
      actionIcon = {
        variant: 'filled',
        color: 'red',
      };
      break;
    case 'delete':
      icon = <ShoppingCartOff size={48} strokeWidth={2} />;
      actionIcon = {
        variant: 'filled',
        color: 'red',
      };
  }

  return (
    <ActionIcon
      variant={actionIcon.variant}
      color={actionIcon.color}
      onClick={() => onClickHandler()}
    >
      {icon}
    </ActionIcon>
  );
};
