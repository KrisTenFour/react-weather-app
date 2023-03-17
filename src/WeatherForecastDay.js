import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let maxTemperature = Math.round(props.data[0].temp.max);
        return `${maxTemperature}`
    }

    function minTemperature() {
        let minTemperature = Math.round(props.data[0].temp.min);
        return `${minTemperature}`
    }

    function day() {
        let date = new Date(props.data[0].dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (

        < div className="WeatherForecastDay" >
            <div className="row">
                <div className="col">
                    <div className="Forecast-day">{day()}</div>
                    <WeatherIcon iconCode="11d" size={35} />
                    <div className="Forecast-temperature">
                        <span className="Forecast-temp-max"><strong>{maxTemperature()}°</strong></span>
                        |{" "}
                        <span className="Forecast-temp-min">{minTemperature()}°</span>
                    </div>
                </div>
            </div>
        </div >
    )
}