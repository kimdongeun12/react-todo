import React, { useState } from "react";
import styled from "styled-components";
import TodoInput from "./components/TodoInput";
import TodoLists from "./components/TodoLists";
import { TodoContext } from "./TodoContext";

function Todo() {
  const [isModal, setModal] = useState({
    bool: false,
    type: null,
    listID: null,
  });

  const openModal = (id) => {
    // 모달을 열때 id값이 있을경우에 id값을 인자값으로 넘기고 isNaN으로 숫자인지 판별후 
    // id가 숫자일경우 MODIFY로 넘기고 없을경우에는 CREATE로 작성
    if (!isNaN(id)) {
      setModal({
        bool: true,
        type: "MODIFY",
        listID: id,
      });
    } else {
      setModal({
        bool: true,
        type: "CREATE",
        listID: null,
      });
    }
  };

  const closeModal = () => {
    // 모달을 닫았을 경우 값 초기화
    setModal({
      bool: false,
      type: null,
      listID: null,
    });
  };

  return (
    <TodoContext>
      <TodoWrap>
        {/* title 컴포넌트 보면 굳이 이렇게 짧은데 props로 내리는게 이해가 안됨 이럴거면 안내리는게 코드 수 줄일 수 있음 */}
        <Title>ToDoList</Title>
        <TodoListsWrap>
          <TodoLists openModal={openModal} />
        </TodoListsWrap>
        <TodoInput isModal={isModal} close={closeModal} />
      </TodoWrap>
    </TodoContext>
  );
}

const TodoWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: 80px 16px 16px;
  width: 100%;
  min-height: 100%;
  background-color: #ffffff;
`;

const TodoListsWrap = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid #dddddd;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 18px -9px;
`;

const Title = styled.div`
  width: 100%;
  padding: 32px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export default Todo;
