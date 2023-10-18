import "./App.css";
import Header from "./Components/Header";
import styled, { createGlobalStyle } from "styled-components";
import TodoList from "./Components/TodoList";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <GlobalStyles />
      <MainContainer darkMode={darkMode} setDarkMode={setDarkMode}>
        <Header
          todoList={todoList}
          setTodoList={setTodoList}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <MainSectionContainer>
          <MainSection>
            <TodoList
              todoList={todoList}
              setTodoList={setTodoList}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          </MainSection>
        </MainSectionContainer>
      </MainContainer>
    </>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Josefin Sans', sans-serif;
    }
    ;
`;

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => (props.darkMode ? "#171823" : "#FAFAFA")};
`;
const MainSection = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-self: center;
`;
const MainSectionContainer = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    justify-content: center;
  }
`;
