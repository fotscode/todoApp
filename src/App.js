import React, { useState } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";
import Calendar from "./components/Calendar.js";

function App() {
    const [toggle, setToggle] = useState(true);
    if (toggle) {
        return <TodoTable setToggle={setToggle} />;
    } else {
        return <Calendar setToggle={setToggle} />;
    }
}

export default App;
