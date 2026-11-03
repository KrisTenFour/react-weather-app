import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecastDay.css"

export default function WeatherForecastDay(props) {
    console.log(props)
    function maxTemperature() {
        let maxTemperature = Math.round(props.data.day.maxtemp_c);
        return `${maxTemperature}`
    }

    function minTemperature() {
        let minTemperature = Math.round(props.data.day.mintemp_c);
        return `${minTemperature}`
    }

    function formatDay() {
        let date = new Date(props.data.date_epoch * 1000);
        let dayIndex = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[dayIndex];
    }

    return (
        <div className="WeatherForecastDay">
            <div className="Forecast-day subtext">{formatDay()}</div>
            <WeatherIcon iconCode={props.data.day.condition.code} size={35} />
            <div className="Forecast-temperature subtext">
                <span className="Forecast-temp-max"><strong>{maxTemperature()}°</strong></span>
                |{" "}
                <span className="Forecast-temp-min">{minTemperature()}°</span>
            </div>
        </div>

    )
}
