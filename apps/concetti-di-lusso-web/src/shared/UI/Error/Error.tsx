// Components
import { Box, Text } from '@mantine/core';
// Styles
import classes from './styles.module.scss'

// TODO: Error component
export const Error = ({ message }: { message: string }) => {
  return (
    <Box className={classes.error}>
      <Text>{message}</Text>
    </Box>
  );
};
