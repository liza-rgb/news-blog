import React from 'react';

import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Calendar } from 'akar-icons';

import { formatDate } from '../../helpers';

import styles from './ArticleCard.module.scss';
import ArrowButton from '../ArrowButton';

interface ArticleCardProps {
  title: string;
  content: string;
  imageUrl: string;
  updatedAt: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, content, imageUrl, updatedAt }) => {
  return (
    <Card variant='outlined' className={styles.card}>
      <CardMedia component='img' image={imageUrl} alt='' />
      <CardContent className={styles.content}>
        <Typography className={styles['publish-date']}>
          <Calendar /> {formatDate(new Date(updatedAt))}
        </Typography>
        <Typography component='h3' className={styles.title}>
          {title}
        </Typography>
        <Typography component='div'>{content}</Typography>
      </CardContent>
      <CardActions className={styles.actions}>
        <ArrowButton type='forward' name='Read more' onClick={() => undefined} />
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
