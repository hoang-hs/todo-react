import React, { useState } from "react";
import styled from "styled-components";

const TodoFormStyle = styled.form`
  margin-bottom: 32px;
`;

const TodoInputStyle = styled.input`
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: 2px solid #5d0cff;
  outline: none;
  width: 320px;
  background: transparent;
  color: #fff;
  ::placeholder {
    color: #e2e2e2;
  }
`;

const TodoButtonStyle = styled.button`
  padding: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  );
  color: #fff;
  text-transform: capitalize;
`;

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
      isComplete: false,
    });

    setInput("");
  };
  let todoInput;
  console.log(props.isEdit);
  if (props.isEdit) {
    todoInput = (
      <React.Fragment>
        <TodoInputStyle
          type="text"
          placeholder="Edit todo"
          value={input}
          name="text"
          onChange={handleChange}
        />
        <TodoButtonStyle>Edit</TodoButtonStyle>
      </React.Fragment>
    );
  } else {
    todoInput = (
      <React.Fragment>
        <TodoInputStyle
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          onChange={handleChange}
        />
        <TodoButtonStyle>Add todo</TodoButtonStyle>
      </React.Fragment>
    );
  }
  return <TodoFormStyle onSubmit={handleSubmit}>{todoInput}</TodoFormStyle>;
}

export default TodoForm;
