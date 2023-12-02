import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const AddTodo = () => {
  const [value, setValue] = useState("");

  const { todos } = useSelector((state) => state.todoListSlice);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
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
          return <Item key={todo.id}>{todo.text}</Item>;
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
  width: calc(100% - 60px);
  height: auto;
  padding: 20px;
  background-color: pink;
  margin: 0 auto;
`;
