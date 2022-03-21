import React, { useState } from "react";
import "./App.css";
import Form from "./componenets/Form";
import TodoList from "./componenets/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1> Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList />
    </div>
  );
}

export default App;
