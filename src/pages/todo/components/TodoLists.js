import React from 'react'
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

function TodoList({todos}) {
  
  // 배열로 리스트를 생성
  // const TodoLists = [
  //   {
  //     id: 1,
  //     item : '아이템',
  //     timeStamp : 202208141403 // 저는 타임스탬프를 집어 넣을거에요
  //   },
  //   {
  //     id: 2,
  //     item : '아이템ㅁㄴㅇ',
  //     timeStamp : 202208141406 // 저는 타임스탬프를 집어 넣을거에요
  //   }
  // ]
  return (
    <>
      <ListsWrap>
        {todos.map((TodoList , index) => (
            <TodoListItem TodoList = {TodoList} key={index} />
        ))}
      </ListsWrap>
    </>
  );
}

const ListsWrap = styled.ul`
  display: block;
  padding: 8px 16px;
  max-height: 390px;
  overflow-y: auto;
`

export default TodoList;
