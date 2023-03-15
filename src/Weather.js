import React, { useState } from "react"
import axios from "axios"
import WeatherData from "./WeatherData";
import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css"

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false })

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            temperature: Math.round(response.data.main.temp),
            humidity: response.data.main.humidity,
            wind: Math.round(response.data.wind.speed),
            description: response.data.weather[0].description
        })
    }

    if (weatherData.ready) {
        return (
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input type="text" placeholder="Enter city..." className="form-control"></input>
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search"
                                className="btn btn-primary w-100"></input>
                        </div>
                    </div>
                </form>
                <WeatherData data={weatherData} />
            </div>
        )
    } else {
        const apiKey = "e1c2feea6507de5a3f0b333f87c2c649"
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse)
        return "Loading..."
    }
}