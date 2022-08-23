import React from 'react'
import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import { useTodoState } from '../TodoContext';

function TodoList({openModal}) {
  
  const todos = useTodoState();
  // 추가 , 삭제 , 변경 된 체크값을 재배열함
  const unChecked = todos.filter(todo => !todo.checked);
  const listComponents = todos.map((todo) => (
    <TodoListItem id={todo.id} item={todo.item} checked={todo.checked} key={todo.id} openModal={openModal} />
  ))
  return (
    <>
      <TodoListCount>할 일이 {unChecked.length}개 남았습니다~</TodoListCount>
      <ListsWrap>
        {todos.length > 0 ? listComponents : <TodoListNone>할 일을 추가 해주세요~</TodoListNone>}
      </ListsWrap>
      <TodoButton onClick={openModal}/>
    </>
  );
}

const ListsWrap = styled.ul`
  display: block;
  padding: 8px 16px 36px;
  height: 440px;
  overflow-y: auto;
`

const TodoListCount = styled.div`
  padding: 8px 16px 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid #dddddd;
  color: #36daac;
  font-weight: bold;
`
const TodoListNone = styled.li`
  text-align : center;
`

const TodoButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: -20px;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border: 2px solid #36daac;
  border-radius : 100%;
  transition: all 0.3s;
  &:before , &:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);
    width: 20px;
    height: 4px;
    border-radius : 4px;
    background-color: #36daac;
    transition: all 0.3s;
  };
  &:after {
    transform: translate(-50% , -50%) rotate(90deg);
  };
  &:hover {
    background-color: #36daac;
  };
  &:hover:before , &:hover:after {
    background-color: #ffffff;
  }
`
export default TodoList;
