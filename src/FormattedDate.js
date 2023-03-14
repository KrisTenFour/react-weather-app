import React from "react"

export default function FormattedDate(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[props.date.getDay()];
    let hour = props.date.getHours();
    let minutes = props.date.getMinutes();
    let date = props.date.getDate();
    let month = props.date.getMonth() + 1;
    let year = props.date.getFullYear();

    if (hour < 10) {
        hour = `0${hour}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    if (month < 10) {
        month = `0${month}`
    }

    return <div>
        {day} {hour}:{minutes}, {date}/{month}/{year}
    </div>
}