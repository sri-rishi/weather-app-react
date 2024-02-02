import { getDate, getDisplayedDay } from "../../helper/helper";

const Forecast = ({forecast}) => {
    const {
        dt_txt,
        main: {temp_max,temp_min},
        weather
    } = forecast;

    const {icon, description} = weather[0];

    let desc;
    let avg_temp;
    
    if(description && temp_max && temp_min) {
        desc= description.slice(0, 1).toUpperCase() + description.slice(1)
        avg_temp= Math.floor((parseInt(temp_max) + parseInt(temp_min)) /2);
    }

    return (
        <div className="forecast-box">
            <div className="forecast-date-div">
                <p>{getDisplayedDay(dt_txt)}</p>
                <p className="forecast-date">{getDate(dt_txt)}</p>
            </div>
            <div className="forecast-temp">
                <p>{avg_temp}°</p>
                <p className="forecast-desc">{desc}</p>
            </div>
            <div className="forecast-weather-icon">
                <img src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${icon}.svg`} alt="weather icon"/>
            </div>
        </div>
    )
}

export default Forecast;