import "normalize.css";
import Header from "./modules/header/Header";
import MainTodoList from "./modules/mainListToDo/MainToDoList";

const App = () => {
  return (
    <>
      <Header />
      <MainTodoList />
    </>
  );
};

export default App;
