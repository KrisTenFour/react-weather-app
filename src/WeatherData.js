import React from "react";
import FormattedDate from "./FormattedDate"

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
                    <div className="col d-flex justify-content-start">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdVJREFUaN7tmc1thDAQRimBElwCJVBCSvAxR5fgEiiBEiiBErhyIx24A2cc2WhiAf4ZA1rJkZ4UZZPN9/AwHrON1rr5ZJoqUAWqQBWoAlWgxJf++WaAAGZAAdpD2dfM7zDS/yopAGE6YDoIHMLIdK8KQIAWGIAtQ8Bh/r59bQWQjCBILCkSJIF1XVuAA9Jivm9ROd0ukS0AQTtgA7SH+Vn31EoEBSAMA2YUUAHiJDyWcCtBuidIArZEroJewVEpjQSJjiIgMsMbpHdjf53sCcEWSxEYCQKOyZQhkshZBZYkYEtHeLVPQSGJnHIS0QI2/FIo+L+VILTXOUVA3BD+D3Q/pAqoFIEebUxFQQLJN/Ojo0TEqDG/JgBv1hdgeVNAP4CKPSvkCKiCQc1KSMRs2+x902hO/Z4cYFhgWOQHY8zo9hOKgCCGH71BEXcqHjEBKDft5gowypVH4YeLgKE9ZSO10cxz7z7TFJqxOEUgZxyYbPi+0M4uSRuZPYCnCPBA6TwrYCWWyFbJImo/FTMpM6pAG5CYvDO0LDii7x2JNAtdSGxuQyp41Q87UqkHW8NJzYsbw+8d6Y5Hi+7qbw8IyOIPd9HRVD8qUD8fqAJVoApUgSrwqfwCJ6xaZshM+xMAAAAASUVORK5CYII=" alt="Weather icon" />
                        <p className="Temperature">{props.data.temperature}°C</p>
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