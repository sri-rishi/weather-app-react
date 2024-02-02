import { useState } from "react";
import {TiWeatherSnow} from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { getUnit } from "../../slices/weatherDataSlice";

const Navbar = () => {
    const {unit} = useSelector(store => store?.weather);
    const dispatch = useDispatch();

    const handleToggleUnit = () => {
        dispatch(getUnit(unit === 'metric' ? 'imperial' : 'metric'))
      };
    return (
        <nav className="nav">
            <h1 className="title"><span>Get Weather</span> <TiWeatherSnow className="nav-icon"/></h1>
            <button className="toggle-deg" onClick={() => handleToggleUnit()}>{unit === 'metric' ? '°C' : '°F'}</button>
        </nav>
    )
}


export default Navbar;