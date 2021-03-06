import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

function TodoTable() {
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const [dateObj, setDateObj] = useState(new Date());

    let dateArray = getDaysArray();

    useEffect(() => {
        getDaysArray();
    });

    function getDaysArray() {
        let arrOfDates = [];
        let auxDate = new Date(dateObj.getTime());
        for (let i = 0; i < 4; i++) {
            arrOfDates.push(
                auxDate.toLocaleDateString("en-US", { weekday: "long" })
            );
            auxDate.setDate(auxDate.getDate() + 1);
        }
        console.log(arrOfDates);
        return arrOfDates;
    }

    function nextDay() {
        let auxDate = new Date(dateObj.getTime());
        auxDate.setDate(auxDate.getDate() + 1);
        setDateObj(auxDate);
    }

    function prevDay() {
        setDateObj(dateObj.setDate(dateObj.getDate() - 1));
    }
    return (
        <main id="main-container">
            <nav id="nav-bar">
                <button className="btn prev" onClick={() => prevDay()}>
                    {"<"}
                </button>
                <button className="btn next" onClick={() => nextDay()}>
                    {">"}
                </button>
            </nav>
            <div id="todo-app">
                <TodoList day={dateArray[0]}></TodoList>
                <TodoList day={dateArray[1]}></TodoList>
                <TodoList day={dateArray[2]}></TodoList>
                <TodoList day={dateArray[3]}></TodoList>
            </div>
        </main>
    );
}

export default TodoTable;
