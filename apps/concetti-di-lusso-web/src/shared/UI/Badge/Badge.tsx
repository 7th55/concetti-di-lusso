import { createStyles, Badge as MantineBadge } from '@mantine/core';

const useStyles = createStyles(() => ({
  badge: {
    position: 'absolute',
    top: -5,
    left: 35,
    zIndex: 1,
  },
}));

export const Badge = (props: { content: number }) => {
  const { classes } = useStyles();
  const { content } = props;

  return (
    <>
      {content !== 0 && (
        <MantineBadge
          className={classes.badge}
          variant="filled"
          size="xs"
          radius="xl"
          sx={{ position: 'absolute', top: -5, left: 35, zIndex: 1 }}
        >
          {content}
        </MantineBadge>
      )}
    </>
  );
};
