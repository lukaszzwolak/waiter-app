import { createAsyncThunk } from '@reduxjs/toolkit';

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
