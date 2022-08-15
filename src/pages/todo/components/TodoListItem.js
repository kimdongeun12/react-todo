import React from 'react';
import styled from "styled-components";

function TodoListItem({TodoList , index}) {
  return (
    <>
      <CheckBoxList>
        <CheckBox >
          <input id="List01" type="checkbox" value=""/>
          <label htmlFor="List01">
            {TodoList.item}
          </label>
        </CheckBox>
        <BtnWrap>
          <BtnIcon>수정</BtnIcon>
          <BtnIcon>삭제</BtnIcon>
        </BtnWrap>
      </CheckBoxList>
    </>
  );
}
const CheckBoxList = styled.li`
  display: flex;
  align-items : center;
  padding-bottom: 8px;
  & + li {
    padding-top: 8px;
    border-top: 1px solid #dddddd;
  };
  &:last-child {
    padding-bottom: 0;
  };
`

const CheckBox = styled.div`
  width: 100%;
  float: left;
  & > input[type="checkbox"] {
    visibility: hidden;
    position: absolute;
    left: 0;
    top: 0;
  };
  & > input[type="checkbox"] + label {
    position: relative;
    display: inline-block;
    padding-left: 24px;
    padding-right: 8px;
    min-height: 18px;
    font-size: 14px;
    cursor: pointer;
  };
  & > input[type="checkbox"] + label::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 16px;
    height: 16px;
    border: 1px solid #dddddd;
    background-color: #ffffff;
    border-radius: 100%;
    transition: all 0.2s;
  };
  & > input[type="checkbox"] + label::after {
    content: "";
    position: absolute;
    left: 6px;
    top: 3px;
    width: 4px;
    height: 8px;
    border: 0 solid #dddddd;
    border-width: 1px 0 0 1px;
    transform: rotate(-135deg);
    transition: all 0.2s;
  };
  & > input[type="checkbox"]:checked + label {
    color : #dddddd;
    text-decoration: line-through;
  };
  & > input[type="checkbox"]:checked + label::before {
    border-color: #36daac;
  };
  & > input[type="checkbox"]:checked + label::after {
    border-color: #36daac;
  };
` 
const BtnWrap = styled.div`
 display: flex;
`
const BtnIcon = styled.button`
 display: inline-block;
 padding: 4px 8px;
 min-width : 48px;
 border: 1px solid #dddddd;
 & + button { margin-left: 4px; }
`


export default TodoListItem;
