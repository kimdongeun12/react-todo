import React from 'react'
import styled from "styled-components";
import TodoTitle from "./components/TodoTitle";
import TodoInput from "./components/TodoInput";
import TodoLists from "./components/TodoLists";

function Todo() {
  const onSaveTodo = () => {
    console.log('저장버튼 테스트');
  }
  
  // 배열로 리스트를 생성
  const TodoLists = [
    {
      item : '아이템',
      timeStamp : 202208141403 // 저는 타임스탬프를 집어 넣을거에요
    },
    {
      item : '아이템ㅁㄴㅇ',
      timeStamp : 202208141406 // 저는 타임스탬프를 집어 넣을거에요
    }
  ]
  return (
    <>
      <TodoWrap>
        <TodoTitle Text ="ToDoList" onSaveTodo={onSaveTodo}/>
        <TodoInput />
        <TodoListsWrap>
          <TodoListCount>할 일이 개 남았습니다~</TodoListCount>
          <TodoLists TodoLists = {TodoLists}/>
        </TodoListsWrap>
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

const TodoListsWrap = styled.div`
  width: 100%;
  border: 1px solid #dddddd;
  background-color : #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 18px -9px;
`
const TodoListCount = styled.div`
  padding: 8px 16px 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid #dddddd;
  color: #36daac;
  font-weight: bold;
`


export default Todo;
