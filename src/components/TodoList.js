import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList({ day }) {
    const searchStorage = () => {
        let storage = JSON.parse(
            localStorage.getItem(day.toLocaleDateString())
        );
        if (storage) return storage;
        return [];
    };

    const [todos, setTodos] = useState(searchStorage);
    const [idCount, setId] = useState(0);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) return;
        const newTodos = [...todos, todo];
        localStorage.setItem(
            day.toLocaleDateString(),
            JSON.stringify(newTodos)
        );
        setTodos(newTodos);
        setId(idCount + 1);
    };

    const removeTodo = (id) => {
        let removeArr = [...todos].filter((todo) => todo.id !== id);
        localStorage.setItem(
            day.toLocaleDateString(),
            JSON.stringify(removeArr)
        );

        if (!removeArr.length)
            localStorage.removeItem(day.toLocaleDateString());
        setTodos(removeArr);
    };

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        localStorage.setItem(
            day.toLocaleDateString(),
            JSON.stringify(updatedTodos)
        );
        setTodos(updatedTodos);
    };

    const isPast = (aDate) => {
        let dateArr = aDate.split("/").map((item) => parseInt(item));
        let todayDate = new Date()
            .toLocaleDateString()
            .split("/")
            .map((item) => parseInt(item));

        if (dateArr[0] === todayDate[0]) return false;

        for (let i = 2; i >= 0; i--) {
            if (todayDate[i] < dateArr[i]) return false;
        }

        return true;
    };

    return (
        <div
            id="day-container"
            className={isPast(day.toLocaleDateString()) ? "past" : ""}
        >
            <h1>{day.toLocaleDateString("en-US", { weekday: "long" })}</h1>
            <h2>{day.toLocaleDateString()}</h2>
            <TodoForm onSubmit={addTodo} id={idCount} />
            <div id="todo-container">
                <Todo
                    todos={todos}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                />
            </div>
        </div>
    );
}

export default TodoList;
