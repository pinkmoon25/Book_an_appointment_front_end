import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cancelAppointment, getAllAppointments, scheduleAppointment } from './appointmentsApi';