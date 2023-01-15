import React from 'react';

import { Box, Typography } from '@mui/material';
import ArticleList from '../../components/ArticleList';
import ArticleSearch from '../../components/ArticleSearch';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Landing from '../../components/Landing';

import { useAppSelector } from '../../store/store';

import styles from './SearchPage.module.scss';

const HomePage: React.FC = () => {
  const status = useAppSelector((state) => state.article.status);
  const articles = useAppSelector((state) => state.article.articles);

  const getContent = () => {
    switch (status) {
      case 'new':
        return <Landing />;
      case 'pending':
        return <Loading name='LOADING ARTICLES...' />;
      case 'fulfilled':
        return (
          <>
            <Typography className={styles['results']}>Results: {articles.length}</Typography>
            <ArticleList />
          </>
        );
      case 'rejected':
        return <Error name="The search can't be implemented!" />;
    }
  };

  return (
    <Box className={styles['home-page']}>
      <ArticleSearch />
      {getContent()}
    </Box>
  );
};

export default HomePage;
