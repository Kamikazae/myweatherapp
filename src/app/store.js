import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/Weather/weatherSlice';
import todoReducer from '../features/Todos/todosSlice';
import backgroundReducer from '../features/unsplash/unsplashSlice';

export const store = configureStore({
  reducer: {
    weather:weatherReducer,
   todos:todoReducer,
   background:backgroundReducer,
  },
});
