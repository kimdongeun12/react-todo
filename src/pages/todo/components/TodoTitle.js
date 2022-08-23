import React from "react";
import styled from "styled-components";

function TodoTitle({ TitleName }) {
  return (
    <>
      {/* 굳이 컴포넌트 분리 ? */}
      <Title>{TitleName}</Title>
    </>
  );
}

const Title = styled.div`
  width: 100%;
  padding: 32px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export default TodoTitle;
