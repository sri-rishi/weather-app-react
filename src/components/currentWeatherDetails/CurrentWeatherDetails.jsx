import { useSelector } from "react-redux";
import { RiDropFill, FiWind} from "../../assets";
import { degreeToDirection } from "../../helper/helper";

const CurrentWeatherDetails = () => {
    const {humidity, wind_speed, wind_direction} = useSelector(store => store?.weather);

    return (
        <div>
            <div className="weather-details">
                <div className="details-box">
                    <div className="details-title">
                        <RiDropFill />
                        <p>Humidity</p>
                    </div>
                    <p className="hum-details">{humidity}%</p>
                </div>
                <div className="details-box">
                    <div className="details-title">
                        <FiWind />
                       <p>Wind Speed</p>
                    </div>
                    <p className="wind-details">
                        <span>{wind_speed}mph</span>
                        <span>{degreeToDirection(wind_direction)}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default CurrentWeatherDetails;