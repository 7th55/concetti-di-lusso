// Components
import { Box, Button, Flex } from '@mantine/core';
// Styles
import classes from './styles.module.scss';

export const Prices = ({
  price,
  oldPrice,
}: {
  price: React.ReactNode;
  oldPrice?: React.ReactNode;
}) => {
  return (
    <Flex
      className={classes.prices}
      w="50%"
      justify="space-between"
      align="center"
    >
      {price}
      {oldPrice && <Box className={classes.oldPrice}>{oldPrice}</Box>}
    </Flex>
  );
};
