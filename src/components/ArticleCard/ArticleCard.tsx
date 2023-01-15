import React from 'react';

import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Calendar } from 'akar-icons';

import { formatDate } from '../../helpers';

import styles from './ArticleCard.module.scss';
import ArrowButton from '../ArrowButton';
import { useAppDispatch } from '../../store/store';
import { setArticleScreen } from '../../store/features/screenSlice';

interface ArticleCardProps {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ id, title, content, imageUrl, publishedAt }) => {
  const dispatch = useAppDispatch();

  return (
    <Card variant='outlined' className={styles.card}>
      <CardMedia component='img' image={imageUrl} alt='' />
      <CardContent className={styles.content}>
        <Typography className={styles['publish-date']}>
          <Calendar /> {formatDate(new Date(publishedAt))}
        </Typography>
        <Typography component='h3' className={styles.title}>
          {title}
        </Typography>
        <Typography component='div'>{content}</Typography>
      </CardContent>
      <CardActions className={styles.actions}>
        <ArrowButton
          type='forward'
          name='Read more'
          onClick={() => dispatch(setArticleScreen({ article_id: id }))}
        />
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
