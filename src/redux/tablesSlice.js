import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTables = createAsyncThunk('tables/fetchTables', async () => {
  const res = await fetch('http://localhost:3131/api/tables');
  const data = await res.json();
  return data;
});

export const updateTable = createAsyncThunk(
  'tables/updateTable',
  async ({ id, data }) => {
    const res = await fetch(`http://localhost:3131/api/tables/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to update table');
    return { id, data };
  }
);

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
        }
});



export default tablesSlice.reducer;