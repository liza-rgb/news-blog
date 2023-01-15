import React from 'react';

import ArticlePage from '../ArticlePage';
import SearchPage from '../SearchPage';

import { useAppSelector } from '../../store/store';

import styles from './MainPage.module.scss';

const MainPage: React.FC = () => {
  const screen = useAppSelector((state) => state.screen.screen);

  switch (screen) {
    case 'search':
      return <SearchPage />;
    case 'article':
      return <ArticlePage />;
    default:
      return null;
  }
};

export default MainPage;
