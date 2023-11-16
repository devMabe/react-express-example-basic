import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "http://localhost:3001/tasks";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
});

export const fetchTask = createAsyncThunk("tasks/fetchTask", async (task) => {
  const response = await axios.get(`${API_BASE_URL}/${task.id}`);
  return response.data;
});

export const createTask = createAsyncThunk("tasks/createTask", async (task) => {
  const response = await axios.post(API_BASE_URL, task);
  return response.data;
});

export const updateTask = createAsyncThunk("tasks/updateTask", async (task) => {
  const response = await axios.put(`${API_BASE_URL}/${task.id}`, task);
  return response.data;
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchTask.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const updatedTask = action.payload;
        const index = state.findIndex((task) => task.id === updatedTask.id);
        if (index !== -1) {
          state[index] = updatedTask;
        }
      })
  },
});

export default tasksSlice.reducer;
