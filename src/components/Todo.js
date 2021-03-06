import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { BsTrash } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";

function Todo({ todos, completeTodo, removeTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: "",
    });
    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? "todo-row complete" : "todo-row"}
            key={index}
        >
            <div className="todo-text" onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <BsTrash
                    className="delete-icon"
                    onClick={() => removeTodo(todo.id)}
                />
                <MdModeEdit className="edit-icon" />
            </div>
        </div>
    ));
}

export default Todo;
