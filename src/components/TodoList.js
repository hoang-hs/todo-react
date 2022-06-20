import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import styled from "styled-components";

const H1Style = styled.h1`
  margin: 32px 0;
  color: #fff;
  font-size: 24px;
`;

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = true;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const updateTodo = ({ id, newValue }) => {
    if (!newValue || /^\s*$/.test(newValue)) {
      return;
    }
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = newValue;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <H1Style>What to do today ?</H1Style>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
