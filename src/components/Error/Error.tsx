import { Alert } from '@mui/material';
import React from 'react';

import styles from './Error.module.scss';

interface ErrorProps {
  name: string;
}

const Error: React.FC<ErrorProps> = ({ name }) => {
  return (
    <Alert severity='error' className={styles.error}>
      {name}
    </Alert>
  );
};

export default Error;
