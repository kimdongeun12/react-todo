import React from 'react';
import styled from "styled-components";
import Header from '../components/Header';
import Todo from "./todo/Todo";

function App() {
  return (
    <>
      <AppWrap>
        <Header />
        <Todo/>
      </AppWrap>
    </>
  );
}


// wrap을 앱처럼 디자인 하기 위해서 생성한 스타일
const AppWrap = styled.div`
  position: relative;
  margin: 50px auto;
  max-width: 375px;
  min-height: 720px;
  max-height: 720px;
  overflow : hidden;
  background-color : #ffffff;
  border : 10px solid #000000;
  border-radius : 48px;
  // 앱의 상단을 스타일한 영역
  &::before {
    content: '';
    display: block;
    position : absolute;
    left : 50%;
    top : 0;
    width: 200px;
    height : 24px;
    background-color : #000000;
    transform : translateX(-50%);
    border-radius : 0 0 30px 30px;
    z-index : 10;
  };
  // 앱의 하단을 스타일한 영역
  &::after {
    content: '';
    display: block;
    position : absolute;
    left : 50%;
    bottom : 8px;
    width: 150px;
    height : 5px;
    background-color : #dedede;
    transform : translateX(-50%);
    border-radius : 32px;
    z-index : 10;
  };
`;



export default App;
