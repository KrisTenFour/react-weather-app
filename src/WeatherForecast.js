import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css"

export default function WeatherForecast(props) {
    const [forecast, setForecast] = useState(null);
    const [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        console.log(response)
        setForecast(response.data.forecast.forecastday);
        setLoaded(true);
    }

    function load() {
        let apiKey = "9726efbe8ded47b6b6795813262910";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=3&aqi=no&alerts=no`;

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
                            if (index < 3) {
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
