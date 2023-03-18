import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    const [forecast, setForecast] = useState(null);
    const [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
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
        let apiKey = "b1a8336ff1e05b64da5625e4158fbea3";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse)

        return (null)
    }
}