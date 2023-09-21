import { Card as MantineCard } from '@mantine/core';
// Styles
import classes from './styles.module.scss';

export const Card = ({ children }: { children: React.ReactNode }) => {
  return <MantineCard className={classes.card}>{children}</MantineCard>;
};
