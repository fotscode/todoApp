import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function Calendar({ setToggle }) {
    function allStorage() {
        let archive = {},
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            archive[keys[i]] = localStorage.getItem(keys[i]);
        }

        return archive;
    }

    function getEventsArray(obj) {
        let eventArray = [];
        for (let item in obj) {
            let todos = JSON.parse(obj[item]);
            let date = item
                .split("/")
                .reverse()
                .map((i) => (i.length < 2 ? "0" + i : i))
                .join("-");

            for (let todo of todos) {
                eventArray.push({
                    date,
                    title: todo.text,
                });
            }
        }
        return eventArray;
    }

    let storageArray = allStorage();
    let events = getEventsArray(storageArray);

    return (
        <div id="calendar">
            <button onClick={() => setToggle(true)}>GO BACK</button>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
            />
        </div>
    );
}

export default Calendar;
