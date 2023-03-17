import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./WeatherForecast.css"

export default function WeatherForecast(props) {
    function handleResponse(response) {
    }

    let apiKey = "b1a8336ff1e05b64da5625e4158fbea3";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

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