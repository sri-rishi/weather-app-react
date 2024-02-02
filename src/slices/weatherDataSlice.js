import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFiveDayForecast, getWeatherData } from "../service/weatherData";

const API_KEY =  process.env.REACT_APP_WEATHER_API_KEY;

const initialState = {
    curr_temp: null,
    min_temp: null,
    max_temp: null,
    humidity: null,
    wind_speed: null,
    wind_direction: null,
    weather_desc: null,
    weather_icon: null,
    country: "IN",
    city: "lucknow",
    unit: "metric",
    error: null,
    forecastArr: []
}



export const weatherData = createAsyncThunk(
    "weather/wetherData",
    async({city, unit, API_KEY}) => {
        const response = await getWeatherData({city, unit, API_KEY});
        console.log(response.data)
        return response.data;
    }
);

export const fiveDayForecast = createAsyncThunk(
    "weather/fiveDayForecast",
    async({city, unit, API_KEY}) => {
        const response = await getFiveDayForecast({city, unit, API_KEY});
        console.log(response.data)
        return response.data;
    }
)

const weatherDataSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        getCity: (state, action) => {
            state.city = action.payload
        },
        getUnit: (state, action) => {
            state.unit = action.payload
        },
        setErrorNull: (state) => {
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(weatherData.pending, (state) => {
                state.error = null;
            })
            .addCase(weatherData.fulfilled, (state, action) => {
                const {
                    main: { temp, temp_min, temp_max, humidity },
                    weather: [{ description, icon }],
                    wind: {speed, deg},
                    sys: {country}
                } = action.payload;

                state.curr_temp = temp;
                state.min_temp = temp_min;
                state.max_temp = temp_max;
                state.humidity = humidity;
                state.wind_speed = speed;
                state.wind_direction = deg;
                state.weather_desc = description;
                state.weather_icon = icon;
                state.country = country
                state.error = null;
            })
            .addCase(weatherData.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(fiveDayForecast.pending, (state) => {
                state.error = null;
            })
            .addCase(fiveDayForecast.fulfilled, (state, action) => {
                const filteredForecast = action.payload.list.filter((item, index, array) => {
                    const currentDate = new Date(item.dt * 1000).toLocaleDateString();
                    const nextDate = index < array.length - 1 ? new Date(array[index + 1].dt * 1000).toLocaleDateString() : null;
                    return currentDate !== nextDate;
                });

                state.forecastArr = filteredForecast;
                state.error = null;
            })
            .addCase(fiveDayForecast.rejected, (state, action) => {
                state.error = action.error.message;
            });
    }
})

export const {getCity, getUnit, setErrorNull} = weatherDataSlice.actions;

export default weatherDataSlice.reducer;