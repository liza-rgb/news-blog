import React, { useRef } from 'react';

import { Box, Button, TextField, Typography } from '@mui/material';
import { Search } from 'akar-icons';

import { useAppDispatch } from '../../store/store';
import { searchArticles } from '../../store/features/articleSlice';

import styles from './ArticleSearch.module.scss';

const ArticleSearch: React.FC = () => {
  const searchQuery = useRef<string>('');

  const dispatch = useAppDispatch();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(searchArticles(searchQuery.current));
  };

  return (
    <Box className={styles['search-form']}>
      <Typography component='div' className={styles['form-title']}>
        Filter by keywords
      </Typography>
      <Box component='form' onSubmit={handleSubmit} noValidate className={styles['form-content']}>
        <Button variant='text' type='submit'>
          <Search />
        </Button>
        <TextField
          id='input-with-sx'
          variant='standard'
          onChange={(e) => (searchQuery.current = e.target.value)}
          className={styles['text-input']}
        />
      </Box>
    </Box>
  );
};

export default ArticleSearch;
