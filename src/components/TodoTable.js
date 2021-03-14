import React, { useState, useEffect } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import TodoList from "./TodoList";

function TodoTable({ setToggle }) {
    const [dateObj, setDateObj] = useState(new Date());

    let dateArray = getDaysArray();

    useEffect(() => {
        getDaysArray();
    });

    function getDaysArray() {
        let arrOfDates = [];
        let auxDate = new Date(dateObj.getTime());
        auxDate.setDate(auxDate.getDate() - 1);
        for (let i = 0; i < 4; i++) {
            arrOfDates.push(new Date(auxDate.getTime()));
            auxDate.setDate(auxDate.getDate() + 1);
        }
        return arrOfDates;
    }

    function nextDay() {
        let auxDate = new Date(dateObj.getTime());
        auxDate.setDate(auxDate.getDate() + 1);
        setDateObj(auxDate);
    }

    function prevDay() {
        let auxDate = new Date(dateObj.getTime());
        auxDate.setDate(auxDate.getDate() - 1);
        setDateObj(auxDate);
    }

    return (
        <main id="main-container">
            <nav class="nav">
                <button className="btn prev" onClick={() => prevDay()}>
                    {<BsChevronLeft />}
                </button>
                <button
                    className="btn calendar"
                    onClick={() => setToggle(false)}
                >
                    {<AiOutlineCalendar />}
                </button>
                <button className="btn next" onClick={() => nextDay()}>
                    {<BsChevronRight />}
                </button>
            </nav>
            <div id="todo-app">
                <TodoList dateProp={dateArray[0]}></TodoList>
                <TodoList dateProp={dateArray[1]}></TodoList>
                <TodoList dateProp={dateArray[2]}></TodoList>
                <TodoList dateProp={dateArray[3]}></TodoList>
            </div>
        </main>
    );
}

export default TodoTable;
