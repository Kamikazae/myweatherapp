import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import fetchWeather from '../../apiconfig/weatherapi';

import styles from './weather.css'

const Weather = () => {
    const dispatch = useDispatch();
    const weatherData = useSelector((state) => state.weather?.data);
    const weatherStatus = useSelector((state) => state.weather?.status);

    useEffect(() => {
        dispatch(fetchWeather('1176615'));
    }, [dispatch]);

    // Check if weatherData and list are available, and get the first entry
    const weather = weatherData?.list?.[0];
    const mainWeather = weather?.weather?.[0];
    const locationName = weatherData?.city?.name || 'Unknown Location'; 
    const iconCode = mainWeather?.icon;
    const iconUrl = iconCode ? `http://openweathermap.org/img/wn/${iconCode}.png` : '';
    const kelvinToCelsius = (kelvin) => kelvin - 273.15;
    return (
        <div className='weather-section' style={styles}>
            {weatherStatus === 'loading' && <p>Loading...</p>}
            {weatherStatus === 'succeeded' && weather && (
                <div>
                    <h2>{locationName}</h2>
                    {iconUrl && <img src={iconUrl} alt={mainWeather?.description} />}
                    <p>Temperature:{kelvinToCelsius(weather.main.temp).toFixed(1)} °C</p> {/* Display temperature in Kelvin */}
                    <p>Weather: {mainWeather?.description}</p>
                </div>
            )}
            {weatherStatus === 'failed' && <p>Error loading weather data</p>}
        </div>
    );
};
export default Weather