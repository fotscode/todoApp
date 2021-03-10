import React from "react";
import { BsTrash } from "react-icons/bs";

function Todo({ todos, completeTodo, removeTodo }) {
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
            </div>
        </div>
    ));
}

export default Todo;
