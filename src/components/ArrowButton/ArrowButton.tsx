import React from 'react';

import { Button, Typography } from '@mui/material';
import { ArrowLeft, ArrowRight } from 'akar-icons';

import styles from './ArrowButton.module.scss';

interface ArrowButtonProps {
  name: string;
  type: 'forward' | 'back';
  onClick: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ name, type, onClick }) => {
  const getButtonContent = () => {
    switch (type) {
      case 'forward':
        return (
          <>
            {name}
            <ArrowRight />
          </>
        );
      case 'back':
        return (
          <>
            <ArrowLeft />
            {name}
          </>
        );
    }
  };
  return (
    <Button className={styles['arrow-button']} onClick={onClick}>
      {getButtonContent()}
    </Button>
  );
};

export default ArrowButton;
