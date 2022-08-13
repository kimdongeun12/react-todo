import styled from "styled-components";
import TodoTitle from "./components/TodoTitle";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function Todo() {
  return (
    <>
      <TodoWrap>
        <TodoTitle Text ="ToDoList"/>
        <TodoInput />
        <TodoList />
      </TodoWrap>
    </>
  );
}


const TodoWrap = styled.div`
  position: absolute;
  left: 0;
  top : 0;
  padding: 80px 16px 16px;
  width: 100%;
  min-height: 100%;
  background-color : #ffffff;
`


export default Todo;
