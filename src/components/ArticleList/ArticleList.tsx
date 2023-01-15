import React from 'react';

import { Grid } from '@mui/material';
import ArticleCard from '../ArticleCard';
import NotFound from '../NotFound';

import { useAppSelector } from '../../store/store';

import styles from './ArticleList.module.scss';

const ArticleList: React.FC = () => {
  const articles = useAppSelector((state) => state.article.articles);

  if (articles.length > 0) {
    return (
      <Grid container spacing={3}>
        {articles.map((article) => {
          return (
            <Grid item key={article.id} xs={12} md={6} lg={4}>
              <ArticleCard
                id={article.id}
                title={article.title}
                content={article.summary}
                imageUrl={article.imageUrl}
                publishedAt={article.publishedAt}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  }

  return <NotFound name="Can't find any appropriate articles! Please try again!" />;
};

export default ArticleList;
