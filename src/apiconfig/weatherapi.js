import {createAsyncThunk} from '@reduxjs/toolkit';

const fetchWeather=createAsyncThunk('weather/fetchWeather',
    async(city)=>{
        const apiKey=process.env.REACT_APP_OPENwEATHER_API_KEY
    const response=await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${city}&appid=${apiKey}`);
        const data=await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch weather data');
          }
        return data
    }
)
export default fetchWeather