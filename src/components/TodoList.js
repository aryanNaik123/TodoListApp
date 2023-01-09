import React, { useState } from "react";

function TodoList() {
  // Initialize an empty list of todos
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (text) => {
    // Create a new todo object with the text and a unique id
    const newTodos = [...todos, { text, id: Date.now() }];
    // Update the list of todos
    setTodos(newTodos);
  };

  // Function to remove a todo
  const removeTodo = (id) => {
    // Filter out the todo with the matching id
    const newTodos = todos.filter((todo) => todo.id !== id);
    // Update the list of todos
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>React Todo List App</h1>
      {/* Form to add a new todo */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Get the value of the input field
          const todoText = e.target.elements.todo.value.trim();
          // Add the todo if the text is not empty
          if (todoText) {
            addTodo(todoText);
            // Clear the input field
            e.target.elements.todo.value = "";
          }
        }}
      >
        <input className="form--input" name="todo" />
        <button className="form-btn" type="submit">
          Add Todo
        </button>
      </form>
      {/* List of todos */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
