import { Flex, Title } from '@mantine/core';

export const OrdersListHeaders = ({ titles }: { titles: Array<string> }) => {
  return (
    <Flex
      sx={(theme) => ({
        backgroundColor: theme.colors.maroon[9],
        color: theme.colors.cultured[0],
      })}
    >
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
