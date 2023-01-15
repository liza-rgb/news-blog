import React from 'react';

import { Box, CircularProgress, Typography } from '@mui/material';

import styles from './Loading.module.scss';

interface LoadingProps {
  name: string;
}

const Loading: React.FC<LoadingProps> = ({ name }) => {
  return (
    <Box className={styles.loading}>
      <CircularProgress />
      <Typography component='div'>{name}</Typography>
    </Box>
  );
};

export default Loading;
