// Components
import { ActionIcon, Flex, Text } from '@mantine/core';
// Icons
import { X } from 'tabler-icons-react';
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
          h="100%"
          w="20%"
          justify="start"
          align="center"
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'light'
                ? theme.colors.cultured[9]
                : theme.colors.dark[4],
          })}
        >
          <Text
            size="lg"
            sx={{
              fontStyle: 'bold',
            }}
          >
            {date} {time}
          </Text>
        </Flex>
        <Flex h="100%" w="20%" justify="start" align="center">
          <Text
            size="lg"
            sx={{
              fontStyle: 'bold',
            }}
          >
            Price: {totalPrice}
            <br />
            Items: {items}
          </Text>
        </Flex>
        <Flex h="100%" w="20%" justify="start" align="center">
          <Text
            size="lg"
            sx={{
              fontStyle: 'bold',
            }}
          >
            {firstName} {lastName}
            <br />
            {phone}
            <br />
            {email}
          </Text>
        </Flex>
        <Flex h="100%" w="20%" justify="start" align="center">
          <Text
            size="lg"
            sx={{
              fontStyle: 'bold',
            }}
          >
            {address}
          </Text>
        </Flex>
        <Flex w="15%" justify="end" align="center">
          <ActionIcon variant="filled" color="error" onClick={deleteHandler}>
            <X />
          </ActionIcon>
        </Flex>
      </Flex>
    </Flex>
  );
};
