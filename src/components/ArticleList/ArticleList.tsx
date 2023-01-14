import React from 'react';

import { Grid } from '@mui/material';
import ArticleCard from '../ArticleCard';

import { useAppSelector } from '../../store/store';

import styles from './ArticleList.module.scss';

const ArticleList: React.FC = () => {
  const articles = useAppSelector((state) => state.article.articles);

  return (
    <div>
      <div>List</div>
      <Grid container spacing={2}>
        {articles.map((article) => {
          return (
            <Grid item key={article.id} xs={12} md={6} lg={4}>
              <ArticleCard
                title={article.title}
                content={article.summary}
                imageUrl={article.imageUrl}
                publishedAt={article.publishedAt}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ArticleList;
