import React from "react";
import FormattedDate from "./FormattedDate"
import WeatherIcon from "./WeatherIcon"
import WeatherTemperature from "./WeatherTemperature"

import "./WeatherData.css"

export default function WeatherData(props) {
    return (
        <div className="WeatherData">
            <div className="container">
                <div className="City">
                    <h1>{props.data.city}</h1>
                </div>
                <div className="Date subtext">
                    <FormattedDate date={props.data.date} />
                </div>
                <div className="Current-temp">
                    <div className="row">
                        <div className="col d-flex align-items-center justify-content-end mt-3 mb-2">
                            <WeatherIcon iconCode={props.data.icon} />
                        </div>
                        <div className="col d-flex align-items-center justify-content-start">
                            <WeatherTemperature celsius={props.data.temperature} />
                        </div>
                    </div>
                    <div className="row">
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
    )
}