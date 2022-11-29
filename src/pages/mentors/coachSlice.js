/* eslint-disable import/prefer-default-export */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCoaches = createAsyncThunk('coaches/fetchingCoaches', async (id) => {
  const response = await fetch('http://localhost:3000/api/v1/coaches');
  const coaches = await response.json();
  return coaches.data;
});

export const deleteCoach = createAsyncThunk('coaches/deleteCoach', async (id) => {
  const response = await fetch(`http://localhost:3000/api/v1/coaches/${id}`,
    { method: 'delete' });
const coaches = await response.json();
return coaches;
});
