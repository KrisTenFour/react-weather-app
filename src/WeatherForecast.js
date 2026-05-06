import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css"

export default function WeatherForecast(props) {
    console.log(props);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    const [forecast, setForecast] = useState(null);
    const [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setForecast(response.coordinates);
        setLoaded(true);
    }

    function load() {
        let apiKey = "t9b7bfca5o9e8e14b53384f350a6b50f";
        let latitude = props.coordinates.latitude;
        let longitude = props.coordinates.longitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse)
    }

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
