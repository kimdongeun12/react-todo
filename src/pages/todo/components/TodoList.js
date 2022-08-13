import styled from "styled-components";
import TodoListItem from "./TodoListItem";

function TodoList() {
  return (
    <>
      <ListWrap>
        <TodoListItem />
      </ListWrap>
    </>
  );
}

const ListWrap = styled.ul`
  padding: 8px 16px;
  width: 100%;
  border: 1px solid #dddddd;
  background-color : #ffffff;
`

export default TodoList;
