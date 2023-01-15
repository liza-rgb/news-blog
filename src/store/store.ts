import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { ArticleSlice } from './features/articleSlice';
import { ScreenSlice } from './features/screenSlice';

export const store = configureStore({
  reducer: {
    article: ArticleSlice.reducer,
    screen: ScreenSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
