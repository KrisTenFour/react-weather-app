import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css"

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="Forecast-day">Thu</div>
                    <WeatherIcon iconCode="11d" size={35} />
                    <div className="Forecast-temperature">
                        <span className="Forecast-temp-max">19°</span>
                        |{" "}
                        <span className="Forecast-temp-min">15°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}