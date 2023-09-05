import { Box, MediaQuery } from '@mantine/core';
import NextImage, { StaticImageData } from 'next/image';

export const Image = ({ src, alt }: { src: StaticImageData; alt: string }) => {
  return (
    <MediaQuery smallerThan={1430} styles={{ width: '100%', maxWidth: 400 }}>
      <Box
        mt={7}
        sx={{
          position: 'relative',
          maxWidth: 300,
          height: 190,
          backgroundColor: 'white',
          borderRadius: 15,
          overflow: 'hidden',
        }}
      >
        <NextImage
          fill={true}
          src={src}
          alt={alt}
          sizes="(max-width: 1430px) 100%"
          priority={true}
        />
      </Box>
    </MediaQuery>
  );
};
