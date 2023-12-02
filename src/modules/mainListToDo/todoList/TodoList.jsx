import styled from "styled-components";

const TodoList = () => {
  return (
    <List>
      <Item>1</Item>
      <Item>2</Item>
      <Item>3</Item>
      <Item>4</Item>
      <Item>5</Item>
    </List>
  );
};

export default TodoList;

const List = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
`;

const Item = styled.li`
  display: flex;
  height: auto;
  padding: 20px;
  background-color: pink;
`;
