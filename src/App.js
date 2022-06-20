import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import styled from "styled-components";

const TodoAppStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 520px;
  min-height: 600px;
  background: #161a2b;
  text-align: center;
  margin: 128px auto;
  border-radius: 10px;
  padding-bottom: 32px;
`;

class App extends Component {
  render() {
    return (
      <TodoAppStyle>
        <TodoList />
      </TodoAppStyle>
    );
  }
}

export default App;
