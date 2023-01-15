import React from 'react';

import { Box, Typography } from '@mui/material';
import { Info } from 'akar-icons';

import styles from './NotFound.module.scss';

interface NotFoundProps {
  name: string;
}

const NotFound: React.FC<NotFoundProps> = ({ name }) => {
  return (
    <Box className={styles['not-found']}>
      <Info />
      <Typography component='div'>{name}</Typography>
    </Box>
  );
};

export default NotFound;
