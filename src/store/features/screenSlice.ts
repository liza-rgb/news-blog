import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScreenState {
  screen: 'search' | 'article';
  article_id: number;
}

const initialState: ScreenState = {
  screen: 'search',
  article_id: 0,
};

export const ScreenSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setSearchScreen: (state, action) => {
      state.screen = 'search';
      state.article_id = 0;
    },

    setArticleScreen: (state, action: PayloadAction<{ article_id: number }>) => {
      state.screen = 'article';
      state.article_id = action.payload.article_id;
    },
  },
});

export default ScreenSlice.reducer;
export const { setSearchScreen, setArticleScreen } = ScreenSlice.actions;
