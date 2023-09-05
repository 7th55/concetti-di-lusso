import { Menu, Title } from '@mantine/core';

export const UserInfo = ({
  email,
  opened,
}: {
  email: string | null;
  opened: boolean;
}) => {
  return (
    <Menu position="bottom-end" opened={opened}>
      <Menu.Dropdown>
        <Title variant="h3">{email}</Title>
      </Menu.Dropdown>
    </Menu>
  );
};
