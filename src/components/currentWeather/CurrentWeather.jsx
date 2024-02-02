import { useSelector } from "react-redux";

const CurrentWeather = () => {
    const {
        curr_temp,
        min_temp,
        max_temp,
        weather_desc,
        weather_icon,
        city,
        country,
        unit
    } = useSelector(store => store?.weather);

    let today = new Date();
    let time = today.getHours() + ":" +today.getMinutes();
    let cityName;
    let weatherDesc 
    if(city && weather_desc) {
        cityName= city.toUpperCase().slice(0, 1) + city.toLowerCase().slice(1) ;
        weatherDesc = weather_desc.slice(0, 1).toUpperCase() + weather_desc.slice(1)
    }

    return (
        <div className="current-weather-box">
            <div className="temp-desc">
                <div className="temp-box">
                    <div className="weather-icon">
                        <img 
                            src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather_icon}.svg`} 
                            alt="weather-icon"
                        />
                    </div>
                    <p className="temp">{curr_temp}° <span className="deg">{unit === "metric" ? "C" : "F"}</span></p>
                    <div className="min-max-box">
                        <p className="min-max-temp">
                            {max_temp}° 
                            <span className="deg-min-max">
                                {unit === "metric" ? "C" : "F"}
                            </span>
                        </p>
                        <p className="min-max-temp">
                            {min_temp}° 
                            <span className="deg-min-max">
                                {unit === "metric" ? "C" : "F"}
                            </span>
                        </p>
                    </div>
                </div>
                <p className="desc">{weatherDesc}</p>
                <p className="location">{cityName}, {country}</p>
                <p>as of {time}</p>
            </div>    
        </div>
    )
}

export default CurrentWeather;