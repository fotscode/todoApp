import React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import TodoList from "./TodoList";

function TodoTable() {
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
            <nav id="nav-bar">
                <button className="btn prev" onClick={() => prevDay()}>
                    {<AiOutlineArrowLeft />}
                </button>
                <button className="btn next" onClick={() => nextDay()}>
                    {<AiOutlineArrowRight />}
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
