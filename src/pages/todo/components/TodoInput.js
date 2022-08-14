import React from 'react';
import styled from "styled-components";

function TodoInput({onSaveTodo}) {
  return (
    <>
      <TextWrap>
        <TextField>
          <input type="text" placeholder='할 일을 적어주세용!'/>
          <button type="button" onClick={onSaveTodo}>저장</button>
        </TextField>
      </TextWrap>
    </>
  );
}

const TextWrap = styled.div`
  margin-bottom: 24px;
`
const TextField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > input[type="text"] {
    width: calc(100% - 56px);
    padding-bottom: 8px;
    border: 0 none;
    border-bottom: 1px solid #dddddd;
    color : #000000
  }
  & > button {
    min-width: 48px;
    padding: 4px 8px;
    border: 1px solid #dddddd;
  }
`


export default TodoInput;
