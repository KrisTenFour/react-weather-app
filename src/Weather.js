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
        setWeatherData({
            ready: true,
            city: response.city,
            coordinates: response.coordinates,
            date: new Date(response.time * 1000),
            temperature: Math.round(response.temperature),
            humidity: response.temperature.humidity,
            wind: Math.round(response.wind.speed),
            description: response.condition.description,
            icon: response.condition.icon,
        })
    }

    function search() {
        const apiKey = "t9b7bfca5o9e8e14b53384f350a6b50f"
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
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
