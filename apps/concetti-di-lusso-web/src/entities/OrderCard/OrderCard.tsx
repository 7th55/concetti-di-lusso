// Components
import { ActionIcon, Flex, Space, Text } from '@mantine/core';
// Styles
import classes from './styles.module.scss';
// Icons
import { QuestionMark, X } from 'tabler-icons-react';
import { OrderCardProps } from './types';
// Types

export const OrderCard = (props: OrderCardProps) => {
  const {
    firstName,
    lastName,
    phone,
    email,
    address,
    date,
    time,
    totalPrice,
    items,
    deleteHandler,
  } = props;

  return (
    <Flex h="100px" align="center" justify="center">
      <Flex h="100%" w="100%">
        <Flex
          className={classes.dateAndTime}
          h="100%"
          w="20%"
          justify="start"
          align="center"
        >
          <Text className={classes.text} size="lg">
            {date} {time}
          </Text>
        </Flex>
        <Flex h="100%" w="20%" justify="start" align="center">
          <Text classNames={classes.text} size="lg">
            Price: {totalPrice}
            <br />
            Items: {items}
          </Text>
        </Flex>
        <Flex h="100%" w="20%" justify="start" align="center">
          <Text className={classes.text} size="lg">
            {firstName} {lastName}
            <br />
            {phone}
            <br />
            {email}
          </Text>
        </Flex>
        <Flex h="100%" w="20%" justify="start" align="center">
          <Text className={classes.text} size="lg">
            {address}
          </Text>
        </Flex>
        <Flex w="15%" justify="end" align="center">
          <ActionIcon variant="filled" color="blue">
            <QuestionMark />
          </ActionIcon>
          <Space w={5} />
          <ActionIcon variant="filled" color="error" onClick={deleteHandler}>
            <X />
          </ActionIcon>
        </Flex>
      </Flex>
    </Flex>
  );
};
