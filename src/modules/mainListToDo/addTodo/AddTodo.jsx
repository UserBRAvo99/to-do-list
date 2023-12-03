import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo, changeTodo, deleteTodo } from "../../../redux/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddTodo = () => {
  const [value, setValue] = useState("");

  const { todos } = useSelector((state) => state.todoListSlice);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: nanoid(), done: false, text: value };
    dispatch(addTodo(newTodo));
    setValue("");
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const changeCheckBox = (id, check) => {
    console.log(check);
    dispatch(changeTodo(id, check));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button>add</button>
      </form>
      <List>
        {todos.map((todo) => {
          console.log(todo);
          return (
            <Item key={todo.id}>
              <input
                onChange={() => changeCheckBox(todo.id, todo.done)}
                type="checkbox"
              />
              <Text $done={todo.done}>{todo.text}</Text>
              <button onClick={() => handleDelete(todo.id, todo.done)}>
                Delete
              </button>
            </Item>
          );
        })}
      </List>
    </div>
  );
};

export default AddTodo;

const List = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Item = styled.li`
  display: flex;
  width: 100%;
  height: auto;
  padding: 20px;
  background-color: pink;
  margin: 0 auto;
`;

const Text = styled.p`
  text-decoration: ${({ $done }) =>
    $done === "true" ? "line-through" : "none"};
`;
