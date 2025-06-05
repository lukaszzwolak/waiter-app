import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import tablesReducer from './tablesSlice';

const store = configureStore({
  reducer: {
    tables: tablesReducer,
  },
  middleware: [thunk],
});

export default store;
