// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import tasksReducer from './reducers/tasksSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: [thunk],
});

export default store;
