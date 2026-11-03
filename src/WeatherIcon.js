import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
    console.log(props)
    const codeMapping = {
        "1000": "CLEAR_DAY",
        // "01n": "CLEAR_NIGHT",
        "1003": "PARTLY_CLOUDY_DAY",
        //  "02n": "PARTLY_CLOUDY_NIGHT",
        "1006": "CLOUDY",
        "1009": "CLOUDY",
        "1063": "RAIN",
        "1153": "RAIN",
        "1168": "RAIN",
        "1171": "RAIN",
        "1180": "RAIN",
        "1183": "RAIN",
        "1186": "RAIN",
        "1189": "RAIN",
        "1192": "RAIN",
        "1195": "RAIN",
        "1198": "RAIN",
        "1201": "RAIN",
        "1240": "RAIN",
        "1243": "RAIN",
        "1246": "RAIN",
        /*1273 with thunder */
        "1273": "RAIN",
        /*1276 with thunder */
        "1276": "RAIN",

        "1066": "SNOW",
        "1114": "SNOW",
        "1117": "SNOW",
        "1210": "SNOW",
        "1213": "SNOW",
        "1216": "SNOW",
        "1219": "SNOW",
        "1222": "SNOW",
        "1225": "SNOW",
        "1237": "SNOW",
        "1255": "SNOW",
        "1258": "SNOW",
        /*1279 with thunder */
        "1279": "SNOW",
        /*1282 with thunder */
        "1282": "SNOW",

        "1069": "SLEET",
        "1204": "SLEET",
        "1207": "SLEET",
        "1249": "SLEET",
        "1252": "SLEET",

        "1012": "FOG",
        "1030": "FOG",
        "1135": "FOG",
        "1147": "FOG",
    };

    return (
        <ReactAnimatedWeather
            icon={codeMapping[props.iconCode]}
            color="pink"
            size={props.size}
            animate={true}
        />)
}
