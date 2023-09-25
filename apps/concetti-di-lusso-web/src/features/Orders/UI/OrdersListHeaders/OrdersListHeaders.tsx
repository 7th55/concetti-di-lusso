// Components
import { Flex, Title } from '@mantine/core';
// Styles
import classes from './styles.module.scss';

export const OrdersListHeaders = ({ titles }: { titles: Array<string> }) => {
  return (
    <Flex className={classes.orderListHeaders}>
      {titles.map((title) => (
        <Flex key={title} w="20%">
          <Title order={2} size="h4">
            {title}
          </Title>
        </Flex>
      ))}
    </Flex>
  );
};
