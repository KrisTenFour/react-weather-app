import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css"

export default function WeatherForecast(props) {
    const [forecast, setForecast] = useState(null);
    const [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    function load() {
        let apiKey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse)
    }

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    if (loaded) {
        return (
            < div className="WeatherForecast" >
                <div className="container">
                    <div className="row">
                        {forecast.map(function (dailyForecast, index) {
                            if (index < 5) {
                                return (
                                    <div className="col" key={index}>
                                        <WeatherForecastDay data={dailyForecast} />
                                    </div>)
                            } else {
                                return (null)
                            }
                        })}
                    </div>
                </div>
            </div >
        )
    } else {
        load()

        return (null)
    }
}
