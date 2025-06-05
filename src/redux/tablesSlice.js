import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTables = createAsyncThunk('tables/fetchTables', async () => {
  const res = await fetch('http://localhost:3131/api/tables');
  const data = await res.json();
  return data;
});

const tablesSlice = createSlice({
    name: 'tables',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
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
            .addCase(fetchTables.rejected, (state,action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default tablesSlice.reducer;