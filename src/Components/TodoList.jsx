import React, { useState } from "react";
import styled from "styled-components";
import deleteImg from "../images/icon-cross.svg";
import checkedIcon from "../images/checked.svg";

function TodoList({ todoList, setTodoList, darkMode, setDarkMode }) {
  const [filter, setFilter] = useState("all");
  const filteredTodoList = todoList.filter((item) => {
    if (filter === "all") {
      return true;
    } else if (filter === "completed") {
      return item.status;
    } else {
      return !item.status;
    }
  });
  console.log(todoList);
  const checkboxHandler = (id) => {
    const newArr = todoList.slice();
    const indexOfObj = newArr.findIndex((item) => item.id === id);
    if (indexOfObj >= 0) {
      newArr[indexOfObj].status = !newArr[indexOfObj].status;
      setTodoList(newArr);
    }
  };

  const deleteToDo = (id) => {
    const newArr = todoList.slice();
    const indexOfObj = newArr.findIndex((item) => item.id === id);
    if (indexOfObj >= 0) {
      newArr.splice(indexOfObj, 1);
      setTodoList(newArr);
    }
  };
  return (
    <>
      <ListContainer darkMode={darkMode}>
        <List darkMode={darkMode}>
          {filteredTodoList.map((item) => {
            return (
              <ListItemContainer key={item.id} darkMode={darkMode}>
                <ListLeft>
                  <CheckBox
                    value={item.status}
                    type="checkbox"
                    checked={item.status}
                    onChange={() => {
                      checkboxHandler(item.id);
                    }}
                  />
                  <ListItem darkMode={darkMode}>{item.description}</ListItem>
                </ListLeft>
                <img
                  src={deleteImg}
                  alt="delete"
                  onClick={() => deleteToDo(item.id)}
                />
              </ListItemContainer>
            );
          })}
          <InfoDiv>
            <Items>
              {filteredTodoList.filter((item) => !item.status).length} items
              left
            </Items>
            <Completed>Clear Completed</Completed>
          </InfoDiv>
        </List>
      </ListContainer>
      <FilterContainer darkMode={darkMode}>
        <ItemsLeft>
          {filteredTodoList.filter((item) => !item.status).length} items left
        </ItemsLeft>
        <FilterTypeContainer>
          <FilterType onClick={() => setFilter("all")}>All</FilterType>
          <FilterType onClick={() => setFilter("active")}>Active</FilterType>
          <FilterType onClick={() => setFilter("completed")}>
            Completed
          </FilterType>
        </FilterTypeContainer>
        <ClearCompleted onClick={() => setFilter("active")}>
          Clear Completed
        </ClearCompleted>
      </FilterContainer>
    </>
  );
}

export default TodoList;

const ListContainer = styled.div`
  border-radius: 5px;
  background-color: ${(props) => (props.darkMode ? "#25273D" : "#FFF")};
  box-shadow: ${(props) =>
    props.darkMode
      ? "0px 35px 50px -15px rgba(0, 0, 0, 0.50)"
      : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"};
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px 20px 19px;
  list-style: none;
`;

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${(props) =>
    props.darkMode ? "1px solid #393A4B" : " 1px solid #e3e4f1"};
  padding: 20px;
  cursor: pointer;
  img {
    cursor: pointer;
  }
  @media (min-width: 1200px) {
    img {
      display: none;
    }
    &:hover img {
      display: block;
    }
  }
`;
const ListItem = styled.li`
  color: ${(props) => (props.darkMode ? "#C8CBE7" : "#494C6B")};
  @media (min-width: 1200px) {
    font-size: 18px;
    font-weight: 400;
  }
`;
const CheckBox = styled.input`
  -webkit-appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e3e4f1;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  &:checked {
    background-image: url(${checkedIcon});
    background-repeat: no-repeat;
    background-size: contain;
  }
  &::before {
    content: "";
    pointer-events: none;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
  }
  cursor: pointer;
`;

const ListLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const FilterContainer = styled.div`
  border-radius: 5px;
  background: ${(props) => (props.darkMode ? "#25273D" : "#FFF")};
  box-shadow: ${(props) =>
    props.darkMode
      ? "0px 35px 50px -15px rgba(0, 0, 0, 0.50)"
      : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px;
  margin-top: 16px;
  @media (min-width: 1200px) {
    width: 540px;
    justify-content: space-between;
  }
`;
const FilterType = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #9495a5;
  cursor: pointer;
  &:hover {
    color: #494c6b;
  }
`;
const ItemsLeft = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    color: #9495a5;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const FilterTypeContainer = styled.div`
  display: flex;
  gap: 19px;
`;
const ClearCompleted = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    cursor: pointer;
    color: #9495a5;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    &:hover {
      color: #494c6b;
    }
  }
`;
const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  padding: 0px 20px 22px;
  @media (min-width: 1200px) {
    display: none;
  }
`;
const Items = styled.div`
  color: #5b5e7e;
  font-size: 12px;
  font-weight: 400;
  @media (min-width: 1200px) {
    display: none;
  }
`;
const Completed = styled.div`
  color: #5b5e7e;
  font-size: 12px;
  font-weight: 400;
  @media (min-width: 1200px) {
    display: none;
  }
`;
