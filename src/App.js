import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { ErrorBox,Navbar } from './components';
import { useEffect } from 'react';
import { fiveDayForecast, weatherData } from './slices/weatherDataSlice';
import Home from './pages/Home';
import { AllRoutes } from './router/AllRoute';

const API_KEY =  process.env.REACT_APP_WEATHER_API_KEY

function App() {
  const {city, unit, error} = useSelector(store => store?.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(weatherData({city, unit, API_KEY}));
    dispatch(fiveDayForecast({city, unit, API_KEY}));
  }, [city, unit]);


  return (
    <div className="App">
      <Navbar />
      <AllRoutes/>
    </div>
  );
}

export default App;
