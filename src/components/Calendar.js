import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { AiOutlineEdit } from "react-icons/ai";

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
                    breakWord: "break-word",
                });
            }
        }
        return eventArray;
    }

    useEffect(() => {
        setTimeout(function () {
            window.dispatchEvent(new Event("resize"));
        }, 1);
    });

    let storageArray = allStorage();
    let events = getEventsArray(storageArray);

    return (
        <div id="calendar">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
                eventBorderColor="gray"
                eventBackgroundColor="#202020"
                eventColor="white"
                //showNonCurrentDates={false}
                fixedWeekCount={false}
                height={"98vh"}
                customButtons={{
                    return: {
                        text: <AiOutlineEdit />,
                        click: () => setToggle(true),
                    },
                }}
                headerToolbar={{
                    left: "prev",
                    center: "title,return",
                    right: "next",
                }}
            />
        </div>
    );
}

export default Calendar;
