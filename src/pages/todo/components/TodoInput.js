import React, { useState, useRef, useEffect } from "react"; // useState를 이용해 상태관리를 할 예정
import styled from "styled-components";
import StyleButton from "../../styles/StyleButton";
import { useTodoController, useTodoState } from "../TodoContext";

function TodoInput({ isModal, close }) {
  const [inputValue, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);
  const todos = useTodoState();
  const dispatch = useTodoController();
  const nextId = useRef(todos.length);

  useEffect(() => {
    if (isModal.type === "MODIFY") {
      setValue(todos.map((todo) => {
        return todo.id === isModal.listID ? todo.item : "";
      }));
    }
    if (isModal.bool === false) {
      setValue("");
    }
    // 의존성배열이 과연 isModal 하나만 빠질까 ?
    // setValue로 modifyItem을 유동적으로 바꾸는데 modifyItem은 안필요할까...? 추가해
  }, [isModal , todos]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length <= 0) {
      alert("할 일을 적어주세용~");
      return false;
    }
    let TodoID = nextId.current;
    if (isModal.type === "CREATE") {
      TodoID = nextId.current++; //nextId 1씩 더하기
    } else if (isModal.type === "MODIFY") {
      TodoID = isModal.listID;
    }

    dispatch({
      type: isModal.type,
      todo: {
        id: TodoID,
        item: inputValue,
        checked: false,
      },
    });
    setValue("");
    close();
  };

  return (
    <>
      {
        // isModal.bool 값이 boolean 값인데 굳이 삼항 연사자를 돌릴 필요없이 참일때만 보이면 됨
        // isModal.bool && (
        //      ~~~~~~~~
        // )
        //
        isModal.bool && (
          <ModalWrap>
            <TextWrap>
              <TextField onSubmit={onSubmit}>
                <input
                  id="todoText"
                  onChange={onChange}
                  value={inputValue}
                  type="text"
                  placeholder="할 일을 적어주세용!"
                  autoFocus
                />
                {/* 버튼을 컴포넌트화 하여 이벤트 전달 */}
                <StyleButton btnType="submit" buttonText="저장" />
                <StyleButton
                  btnType="button"
                  buttonText="취소"
                  clickEvent={close}
                />
              </TextField>
            </TextWrap>
          </ModalWrap>
        )
      }
    </>
  );
}

const ModalWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 15;
`;

const TextWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  max-width: 320px;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  transition: cubic-bezier(0.1, 1.3, 0.37, 1) 0.8s;
`;
const TextField = styled.form`
  display: flex;
  padding: 24px 12px 8px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  & > input[type="text"] {
    display: block;
    width: 100%;
    padding-bottom: 8px;
    border: 0 none;
    border-bottom: 1px solid #dddddd;
    color: #000000;
    margin-bottom: 24px;
  }
  & > button {
    width: calc(50% - 2px);
  }
`;

export default TodoInput;
