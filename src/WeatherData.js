import React from "react";
import FormattedDate from "./FormattedDate"
import WeatherIcon from "./WeatherIcon"

import "./WeatherData.css"

export default function WeatherData(props) {
    return <div className="WeatherData">
        <div className="container">
            <div className="City">
                <h1>{props.data.city}</h1>
            </div>
            <div className="Date subtext">
                <p><FormattedDate date={props.data.date} /></p>
            </div>
            <div className="Current-temp">
                <div className="row">
                    <div className="col d-flex align-items-center justify-content-center">
                        <WeatherIcon iconCode={props.data.icon} />
                    </div>
                    <div className="col d-flex align-items-center">
                        <p className="Temperature">
                            {props.data.temperature}°C
                        </p>
                    </div>
                    <div className="col d-flex align-items-center">
                        <div className="Card subtext">
                            <ul>
                                <li className="text-capitalize">{props.data.description}</li>
                                <li>Humidity: {props.data.humidity}%</li>
                                <li>Wind: {props.data.wind}km/h</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}