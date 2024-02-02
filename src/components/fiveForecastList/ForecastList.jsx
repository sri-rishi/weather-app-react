import { useSelector } from "react-redux";
import Forecast from "../fiveDayforecast/Forecast"

const ForeCastList = () => {
    const {forecastArr} = useSelector(store => store?.weather);
    return (
        <div className="forecast-list">
            {
                forecastArr.length !== 0 ?
                forecastArr.map((forecast) => (
                    <Forecast key={forecast.dt} forecast={forecast}/>
                ))
                : <></>
            }
        </div>
    )
}

export default ForeCastList;