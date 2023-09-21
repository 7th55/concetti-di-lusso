import { Box, MediaQuery } from '@mantine/core';
import NextImage, { StaticImageData } from 'next/image';
// Styles
import classes from './styles.module.scss';

export const Image = ({ src, alt }: { src: StaticImageData; alt: string }) => {
  return (
    <Box mt={7} className={classes.image}>
      <NextImage
        fill={true}
        src={src}
        alt={alt}
        sizes="(max-width: 1430px) 100%"
        priority={true}
      />
    </Box>
  );
};
