import {createSlice} from '@reduxjs/toolkit';
import fetchWeather from '../../apiconfig/weatherapi';
 const weatherSlice=createSlice({
    name:'Weather',
    initialState:{
        data:null,
        status:'idle',
        error:null,

    },
    extraReducers:(builder)=>{
     builder
     .addCase(fetchWeather.pending,(state,action)=>{
        state.status='loading';
     })
     .addCase(fetchWeather.fulfilled,(state,action)=>{
        state.data=action.payload;
        state.status='succeeded'
     }
     )
     .addCase(fetchWeather.rejected,(state,action)=>{
        state.status='failed';
        state.error=action.error.message;
     })
    }
 })
 export const weatherSelector=(state)=>state.weather.data;
 const weatherReducer=weatherSlice.reducer
 export default weatherReducer;