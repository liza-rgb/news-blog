import React from 'react';

import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Calendar } from 'akar-icons';
import ArrowButton from '../ArrowButton';

import { formatDate } from '../../helpers';

import { useAppDispatch, useAppSelector } from '../../store/store';
import { setArticleScreen } from '../../store/features/screenSlice';

import styles from './ArticleCard.module.scss';

interface ArticleCardProps {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ id, title, content, imageUrl, publishedAt }) => {
  const searchQuery = useAppSelector((state) => state.search.searchQuery);

  const dispatch = useAppDispatch();

  const getHighlightedText = (text: string) => {
    const textParts = text.split(new RegExp(`(${searchQuery.replace(' ', '|')})`, 'gi'));
    const searchParts = searchQuery.toLowerCase().split(' ');

    return (
      <>
        {textParts.map((part, i) => (
          <Typography
            component='span'
            key={i}
            className={searchParts.includes(part.toLowerCase()) ? styles.highlight : ''}
          >
            {part}
          </Typography>
        ))}
      </>
    );
  };

  return (
    <Card variant='outlined' className={styles.card}>
      <CardMedia component='img' image={imageUrl} alt='' />
      <CardContent className={styles.content}>
        <Typography className={styles['publish-date']}>
          <Calendar /> {formatDate(new Date(publishedAt))}
        </Typography>
        <Typography component='h3' className={styles.title}>
          {getHighlightedText(title)}
        </Typography>
        <Typography component='div'>{getHighlightedText(content)}</Typography>
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
