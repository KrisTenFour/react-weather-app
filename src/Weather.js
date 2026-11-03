import React, { useState } from "react"
import axios from "axios"
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast"
import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css"

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false })
    const [city, setCity] = useState(props.defaultCity)

    function handleResponse(response) {
        const apiWeatherData = response.data;

        console.log(apiWeatherData)

        if (!apiWeatherData || !apiWeatherData.current || !apiWeatherData.location) {
            console.log("Skipping empty or incomplete API response data.");
            return;
        }

        setWeatherData({
            ready: true,
            city: apiWeatherData.location.name,
            coordinates: apiWeatherData.location,
            date: new Date(apiWeatherData.current.last_updated_epoch * 1000),
            temperature: Math.round(apiWeatherData.current.temp_c),
            humidity: apiWeatherData.current.humidity,
            wind: Math.round(apiWeatherData.current.wind_kph),
            description: apiWeatherData.current.condition.text,
            icon: apiWeatherData.current.condition.code
        })
    }

    function search() {
        const apiKey = "9726efbe8ded47b6b6795813262910"
        let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
        axios.get(apiUrl).then(handleResponse)
    }

    function handleSubmit(event) {
        event.preventDefault();
        search()
    }

    function handleCityChange(event) {
        setCity(event.target.value)
    }

    if (weatherData.ready) {
        return (
            <div className="Weather container">
                <form onSubmit={handleSubmit}>
                    <div className="row gx-2">
                        <div className="col-9">
                            <input type="text" placeholder="Enter city..." autoFocus="on" className="form-control" onChange={handleCityChange} ></input>
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search"
                                className="btn btn-secondary w-100"></input>
                        </div>
                    </div>
                </form>
                <WeatherData data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
        )
    } else {
        search()
        return "Loading..."
    }
}
