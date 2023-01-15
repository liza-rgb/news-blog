import React from 'react';

import { Box, Typography } from '@mui/material';

import styles from './Landing.module.scss';

const Landing: React.FC = () => {
  return (
    <Box className={styles.landing}>
      <Typography>
        This app allows you to search for recent articles by title and/or content.
      </Typography>
    </Box>
  );
};

export default Landing;
