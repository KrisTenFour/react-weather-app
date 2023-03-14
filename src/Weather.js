import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios"

import "./Weather.css"

export default function Weather() {
    return (
        <div className="Weather">
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
                <div className="City">
                    <h1>London</h1>
                </div>
                <div className="Date subtext">
                    <p>Tuesday, 09:00, 10/03/2023</p>
                </div>
                <div className="Current-temp">
                    <div className="row">
                        <div className="col d-flex justify-content-start">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdVJREFUaN7tmc1thDAQRimBElwCJVBCSvAxR5fgEiiBEiiBErhyIx24A2cc2WhiAf4ZA1rJkZ4UZZPN9/AwHrON1rr5ZJoqUAWqQBWoAlWgxJf++WaAAGZAAdpD2dfM7zDS/yopAGE6YDoIHMLIdK8KQIAWGIAtQ8Bh/r59bQWQjCBILCkSJIF1XVuAA9Jivm9ROd0ukS0AQTtgA7SH+Vn31EoEBSAMA2YUUAHiJDyWcCtBuidIArZEroJewVEpjQSJjiIgMsMbpHdjf53sCcEWSxEYCQKOyZQhkshZBZYkYEtHeLVPQSGJnHIS0QI2/FIo+L+VILTXOUVA3BD+D3Q/pAqoFIEebUxFQQLJN/Ojo0TEqDG/JgBv1hdgeVNAP4CKPSvkCKiCQc1KSMRs2+x902hO/Z4cYFhgWOQHY8zo9hOKgCCGH71BEXcqHjEBKDft5gowypVH4YeLgKE9ZSO10cxz7z7TFJqxOEUgZxyYbPi+0M4uSRuZPYCnCPBA6TwrYCWWyFbJImo/FTMpM6pAG5CYvDO0LDii7x2JNAtdSGxuQyp41Q87UqkHW8NJzYsbw+8d6Y5Hi+7qbw8IyOIPd9HRVD8qUD8fqAJVoApUgSrwqfwCJ6xaZshM+xMAAAAASUVORK5CYII=" alt="Weather icon" />
                            <p className="Temperature">10°C</p>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="Card subtext">
                                <ul>
                                    <li>Light rain</li>
                                    <li>Humidity: 10%</li>
                                    <li>Wind: 5km/h</li>
                                </ul>
                            </div></div>
                    </div>
                </div>
            </div>
        </div >
    )
}