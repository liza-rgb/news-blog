import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Article } from '../../helpers';

interface ArticleState {
  articles: Article[];
  status: 'fulfilled' | 'pending' | 'rejected' | 'new';
}

interface SortedArticle extends Article {
  score: number;
}

const initialState: ArticleState = {
  articles: [],
  status: 'new',
};

export const searchArticles = createAsyncThunk(
  'article/search',
  async (query: string, thunkAPI) => {
    query = query.trim();

    // filter articles by coincidences in titles and/or description
    let searchURL = 'https://api.spaceflightnewsapi.net/v3/articles?_limit=20&';
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
    const articles = await response.json();

    // sort articles by relevance
    const sortedArticles: Article[] = articles
      .map((article: Article) => {
        let score = 0;

        const titleMatches = (
          article.title.match(new RegExp(`(${query.replace(' ', '|')})`, 'gi')) || []
        ).length;
        const summaryMatches = (
          article.summary.match(new RegExp(`(${query.replace(' ', '|')})`, 'gi')) || []
        ).length;

        score = score + 100 * titleMatches + summaryMatches;

        return { ...article, score };
      })
      .sort((a: SortedArticle, b: SortedArticle) => b.score - a.score);

    return sortedArticles;
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
