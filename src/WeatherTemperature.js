import React from "react";

import "./WeatherTemperature.css"

export default function WeatherTemperature(props) {
    return (
        <div className="WeatherTemperature">
            <span className="temperature">
                {props.celsius}
            </span>
            <span className="unit">°C</span>
        </div>
    )
}
