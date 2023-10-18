import React, { useState } from "react";
import styled from "styled-components";
import backgroundImg from "../images/bg-mobile-light.jpg";
import backgroundImgDark from "../images/bg-mobile-dark.jpg";
import backgroundDesktop from "../images/bg-desktop-light.jpg";
import backgroundDesktopDark from "../images/bg-desktop-dark.jpg";
import moonImg from "../images/icon-moon.svg";
import sunImg from "../images/icon-sun.svg";
import Checkbox from "./Checkbox";
import { v4 as uuidv4 } from "uuid";

function Header({ todoList, setTodoList, darkMode, setDarkMode }) {
  const [newTodo, setNewTodo] = useState([]);
  const [checkedStatus, setCheckedStatus] = useState(false);
  const addTodo = (e) => {
    const id = uuidv4();
    if (e.code == "Enter") {
      setTodoList([
        ...todoList,
        { id, description: newTodo, status: checkedStatus },
      ]);
      setNewTodo("");
      setCheckedStatus(false);
    }
  };
  return (
    <Container darkMode={darkMode}>
      <div>
        <HeaderSection>
          <Todo>TODO</Todo>
          {darkMode ? (
            <ToggleImg
              src={sunImg}
              alt="sun"
              onClick={() => setDarkMode(false)}
            />
          ) : (
            <ToggleImg
              src={moonImg}
              alt="Moon"
              onClick={() => setDarkMode(true)}
            />
          )}
        </HeaderSection>
        <InputContainer>
          <Checkbox
            checkedStatus={checkedStatus}
            setCheckedStatus={setCheckedStatus}
          />
          <TodoInput
            value={newTodo}
            type="text"
            placeholder="Create a new todo…"
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={(e) => addTodo(e)}
            darkMode={darkMode}
          />
        </InputContainer>
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background-image: ${(props) =>
    props.darkMode ? `url(${backgroundImgDark})` : `url(${backgroundImg})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  padding: 48px 24px;
  margin-bottom: 20px;

  @media (min-width: 1200px) {
    background-image: ${(props) =>
      props.darkMode
        ? `url(${backgroundDesktopDark})`
        : `url(${backgroundDesktop})`};
    height: 300px;
    display: flex;
    justify-content: center;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (min-width: 1200px) {
    width: 540px;
  }
`;

const Todo = styled.h1`
  font-size: 24px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 5px;

  @media (min-width: 1200px) {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 15px;
  }
`;

// const HeaderContainer = styled.div`
//   @media (min-width: 1200px) {
//     display: flex;
//     justify-content: center;
//   }
// `;
const ToggleImg = styled.img`
  cursor: pointer;
`;
const TodoInput = styled.input`
  width: 100%;
  border-radius: 5px;
  color: ${(props) => (props.darkMode ? "#C8CBE7" : "#494C6B")};
  background-color: ${(props) => (props.darkMode ? "#25273D" : "#FFF")};
  box-shadow: ${(props) =>
    props.darkMode
      ? " 0px 35px 50px -15px rgba(0, 0, 0, 0.50)"
      : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"};
  border: none;
  padding: 16px 5px 14px 45px;
  outline: none;
  &::placeholder {
    font-size: 12px;
    color: #9495a5;
  }
  @media (min-width: 1200px) {
    padding: 24px 72px;
    font-size: 18px;
    font-weight: 400;

    &::placeholder {
      font-size: 18px;
    }
  }
`;
const InputContainer = styled.div`
  position: relative;
`;
