import React from 'react';
import styled from "styled-components";
import StyleButton from "../../styles/StyleButton"
import { useTodoController } from '../TodoContext';


function TodoListItem({id, item, checked}) {
  const dispatch = useTodoController();

  const onChecking = () => {
    dispatch({
      type: 'CHECK',
      id
    });
  }

  const onRemove = (e) => {
    dispatch({
      type: 'REMOVE',
      id
    });
    
  };
  

  return (
    <>
      <CheckBoxList>
        <CheckBox >
          <input id={`List${id}`} type="checkbox" checked={checked} onChange = {onChecking}/>
          <label htmlFor={`List${id}`}>
            {item}
          </label>
        </CheckBox>
        <StyleButton btnType="button" buttonText="수정"/>
        <StyleButton btnType="button" buttonText="삭제" clickEvent={() => onRemove(id)}/>
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
  word-break: break-all;
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


export default TodoListItem;
