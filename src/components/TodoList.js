import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList({ dateProp }) {
  const searchStorage = (date) => {
    let storage = JSON.parse(
      localStorage.getItem(date.toLocaleDateString("es-ES"))
    );
    if (storage) return storage;
    return [];
  };

  const lookMaxId = (date) => {
    let storage = JSON.parse(
      localStorage.getItem(date.toLocaleDateString("es-ES"))
    );
    if (!storage) return 0;
    let max = -1;
    for (let item of storage) {
      if (item.id > max) max = item.id;
    }
    return max + 1;
  };

  const [dateState, setDate] = useState(dateProp);
  const [todos, setTodos] = useState(searchStorage(dateState));
  const [idCount, setId] = useState(lookMaxId(dateProp));

  if (dateState !== dateProp) {
    setTodos(searchStorage(dateProp));
    setDate(dateProp);
  }

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) return;
    const newTodos = [...todos, todo];
    localStorage.setItem(
      dateState.toLocaleDateString("es-ES"),
      JSON.stringify(newTodos)
    );
    setTodos(newTodos);
    setId(idCount + 1);
  };

  const removeTodo = (id) => {
    let removeArr = [...todos].filter((todo) => todo.id !== id);
    localStorage.setItem(
      dateState.toLocaleDateString("es-ES"),
      JSON.stringify(removeArr)
    );

    if (!removeArr.length)
      localStorage.removeItem(dateState.toLocaleDateString("es-ES"));
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
      dateState.toLocaleDateString(),
      JSON.stringify(updatedTodos)
    );
    setTodos(updatedTodos);
  };

  const isPast = (aDate) => {
    let dateArr = aDate.split("/").map((item) => parseInt(item));
    let todayDate = new Date()
      .toLocaleDateString("es-ES")
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
      className={isPast(dateState.toLocaleDateString("es-ES")) ? "past" : ""}
    >
      <h1>
        {dateState.toLocaleDateString("en-US",{weekday:"long"})}
      </h1>
      <h2>{dateState.toLocaleDateString()}</h2>
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
