import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  searchQuery: string;
}

const initialState: SearchState = {
  searchQuery: '',
};

export const SearchSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<{ searchQuery: string }>) => {
      state.searchQuery = action.payload.searchQuery;
    },
  },
});

export default SearchSlice.reducer;
export const { setSearchQuery } = SearchSlice.actions;
