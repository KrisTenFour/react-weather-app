import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css"

export default function WeatherForecast(props) {
    const [forecast, setForecast] = useState(null);
    const [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            < div className="WeatherForecast" >
                <div className="row">
                    <div className="col">
                        <WeatherForecastDay data={forecast} />
                    </div>
                </div>
            </div >
        )
    } else {
        let apiKey = "b1a8336ff1e05b64da5625e4158fbea3";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse)

        return (null)
    }
}