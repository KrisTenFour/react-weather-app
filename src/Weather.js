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
            city: response.data.name,
            coordinates: response.data.coord,
            date: new Date(response.data.dt * 1000),
            temperature: Math.round(response.data.main.temp),
            humidity: response.data.main.humidity,
            wind: Math.round(response.data.wind.speed),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon
        })
    }

    function search() {
        const apiKey = "e1c2feea6507de5a3f0b333f87c2c649"
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
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