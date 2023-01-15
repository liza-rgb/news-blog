import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Article } from '../../helpers';

interface ArticleState {
  articles: Article[];
  status: 'fulfilled' | 'pending' | 'rejected' | 'new';
}

const initialState: ArticleState = {
  articles: [],
  status: 'new',
};

export const searchArticles = createAsyncThunk(
  'article/search',
  async (query: string, thunkAPI) => {
    // check if string is empty
    if (!query.trim()) {
      return [];
    }

    let searchURL = 'https://api.spaceflightnewsapi.net/v3/articles?';
    // filter articles by coincidences in titles and/or description
    query.split(' ').map((word, index) => {
      if (word) {
        return (searchURL += `_where[_or][${index * 2}][title_contains]=${word}&_where[_or][${
          index * 2 + 1
        }][summary_contains]=${word}&`);
      }
    });

    const response = await fetch(searchURL, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  },
);

export const ArticleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchArticles.pending, (state, action) => {
      state.articles = [];
      state.status = 'pending';
    });

    builder.addCase(searchArticles.fulfilled, (state, action) => {
      state.articles = action.payload;
      state.status = 'fulfilled';
    });

    builder.addCase(searchArticles.rejected, (state, action) => {
      state.status = 'rejected';
    });
  },
});

export default ArticleSlice.reducer;
