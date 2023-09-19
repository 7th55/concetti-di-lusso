// Components
import { Badge as MantineBadge } from '@mantine/core';
// Styles
import classes from './styles.module.scss';

export const Badge = (props: { content: number }) => {
  const { content } = props;

  return (
    <>
      {content !== 0 && (
        <MantineBadge
          className={classes.badge}
          variant="filled"
          size="xs"
          radius="xl"
        >
          {content}
        </MantineBadge>
      )}
    </>
  );
};
