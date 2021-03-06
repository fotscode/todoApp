import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList({ day, date }) {
    const [todos, setTodos] = useState([]);
    const [idCount, setId] = useState(0);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) return;
        const newTodos = [...todos, todo];
        setTodos(newTodos);
        setId(idCount + 1);
        console.log(newTodos);
    };

    const removeTodo = (id) => {
        let removeArr = [...todos].filter((todo) => todo.id !== id);
        setTodos(removeArr);
    };

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div id="day-container">
            <h1>{day}</h1>
            <h2>{date}</h2>
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
