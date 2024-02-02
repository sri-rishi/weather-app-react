import { useDispatch, useSelector } from "react-redux";
import { CurrentWeather, CurrentWeatherDetails, ErrorBox, ForeCastList, SearchBox } from "../components";
import { useEffect } from "react";
import { setErrorNull } from "../slices/weatherDataSlice";

const Home =() => {
    const {error} = useSelector(store=> store?.weather);
    const dispatch = useDispatch();

    useEffect(() => {
       if(error) {
         setTimeout(() => {
            dispatch(setErrorNull())
         }, 5000);
       }
    }, [error])

    if(error) {
        return (
            <ErrorBox />
        )
    }
    return (
        <div className="main">
          <div className="weather-section-1">
            <SearchBox />
            <CurrentWeather />
            <CurrentWeatherDetails />
          </div>
          <div className="weather-section-2"> 
            <ForeCastList/>
          </div>
        </div>
    )
}

export default Home;