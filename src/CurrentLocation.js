import React from "react";
import axios from "axios";

export default function CurrentLocation() {
    function showCurrentWeather() {

    }


    function retrievePosition(position) {
        navigator.geolocation.getCurrentPosition(retrievePosition)
        let apiKey = "b1a8336ff1e05b64da5625e4158fbea3";
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`

        axios.get(apiUrl).then(showCurrentWeather)
    }

    return (
        <div onClick={retrievePosition}>
            <input type="button" value="Current" className="btn btn-secondary w-100"></input>
        </div>
    )
}