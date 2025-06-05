import { createSlice } from '@reduxjs/toolkit';
import { fetchTables, updateTable } from './tablesThunks';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTables.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTables.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTables.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateTable.fulfilled, (state, action) => {
        const { id, data } = action.payload;
        const index = state.data.findIndex(table => table.id === id);
        if (index !== -1) {
          state.data[index] = { ...state.data[index], ...data };
        }
      });
  },
});

export default tablesSlice.reducer;
