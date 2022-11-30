import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cancelAppointment, getAllAppointments, scheduleAppointment } from './appointmentsApi';
import storage from '../../app/localStorage';
const baseURL = process.env.REACT_APP_BASE_URL;
const token = storage.get('token');

