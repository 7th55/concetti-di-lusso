import { MediaQuery, Card as MantineCard } from '@mantine/core';

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <MediaQuery smallerThan={1430} styles={{ width: '100%', maxWidth: 400 }}>
      <MantineCard
        sx={(theme) => ({
          width: 329,
          height: 418,
          maxWidth: 329,
          minWidth: 280,
          backgroundColor:
            theme.colorScheme === 'light'
              ? theme.colors.cultured[9]
              : theme.colors.dark[6],
          borderRadius: 10,
        })}
      >
        {children}
      </MantineCard>
    </MediaQuery>
  );
};
