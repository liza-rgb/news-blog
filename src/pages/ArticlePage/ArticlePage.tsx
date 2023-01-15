import React from 'react';

import ArrowButton from '../../components/ArrowButton';
import { Box, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../store/store';

import styles from './ArticlePage.module.scss';
import { setSearchScreen } from '../../store/features/screenSlice';

const ArticlePage: React.FC = () => {
  const articles = useAppSelector((state) => state.article.articles);
  const article_id = useAppSelector((state) => state.screen.article_id);

  const article = articles.find((article) => article.id === article_id);

  const dispatch = useAppDispatch();

  return (
    <Box className={styles['article-page']}>
      <Box component='img' alt='' src={article?.imageUrl} className={styles['background-image']} />
      <Box component='div' className={styles['article-wrapper']}>
        <Box component='div' className={styles['article-content']}>
          <Typography component='h1'>{article?.title}</Typography>
          <Typography component='article'>{article?.summary}</Typography>
        </Box>
        <ArrowButton
          type='back'
          name='Back to homepage'
          onClick={() => dispatch(setSearchScreen({}))}
        />
      </Box>
    </Box>
  );
};

export default ArticlePage;
