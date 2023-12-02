import styled from "styled-components";

const MobileHeader = () => {
  return (
    <Header>
      <div>
        <h1>ToDo</h1>
      </div>
    </Header>
  );
};

export default MobileHeader;

const Header = styled.header`
  display: flex;
  width: 100%;
  background-color: pink;
  justify-content: center;
  padding: 0 20px;
`;
