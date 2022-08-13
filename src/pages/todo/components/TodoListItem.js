import styled from "styled-components";

function TodoListItem() {
  return (
    <>
      <CheckBoxList>
        <CheckBox >
          <input id="List01" type="checkbox" value="" />
          <label for="List01">
            아이템
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
    font-size: 18px;
    cursor: pointer;
  };
  & > input[type="checkbox"] + label::before {
    content: "";
    position: absolute;
    left: 0;
    top: 4px;
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
    top: 7px;
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
    border-color: #2778fe;
    background-color: #2778fe;
  };
  & > input[type="checkbox"]:checked + label::after {
    border-color: #ffffff;
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
