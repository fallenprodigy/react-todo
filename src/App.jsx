import React, { useState } from "react";
import "./App.css";
import Form from "./componenets/Form";
import TodoList from "./componenets/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Your Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
