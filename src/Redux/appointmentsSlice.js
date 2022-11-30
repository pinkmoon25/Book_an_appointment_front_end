import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cancelAppointment, getAllAppointments, scheduleAppointment } from './appointmentsApi';
import storage from '../../app/localStorage';