import axios from "axios"

const getWeatherData = ({city, unit, API_KEY}) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`)
}

const getFiveDayForecast= ({city, unit, API_KEY}) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`);
}

export {getWeatherData, getFiveDayForecast};