import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
  const colorScheme = theme.colorScheme === 'light';
  return {
    addCart: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '137px',
      height: '2.63rem',
      fontSize: '16px',
      fontWeight: 500,
      textTransform: 'uppercase',
      textAlign: 'center',
      color: colorScheme
        ? theme.colors.cultured[0]
        : theme.colors.raisinBlack[9],
      backgroundColor: colorScheme
        ? theme.colors.raisinBlack[9]
        : theme.colors.cultured[0],
      borderRadius: '5px',
      '&:hover': {
        color: theme.colors.cultured[9],
        backgroundColor: colorScheme
          ? theme.colors.raisinBlack[8]
          : theme.colors.raisinBlack[9],
      },
      '&:active': {
        color: colorScheme
          ? theme.colors.raisinBlack[9]
          : theme.colors.cultured[0],
        backgroundColor: colorScheme
          ? theme.colors.cultured[9]
          : theme.colors.raisinBlack[9],
        border: colorScheme
          ? `1px solid ${theme.colors.raisinBlack[9]}`
          : `1px solid ${theme.colors.cultured[9]}`,
      },
      [`@media (max-width: 1440px)`]: {
        width: '100%',
      },
    },
  };
});
