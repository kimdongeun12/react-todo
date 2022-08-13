import styled from "styled-components";

function Header() {
  return (
    <>
      <HeaderWrap>
        <TitleText>
          <span>ToDo실습</span>
        </TitleText>
      </HeaderWrap>
    </>
  );
}

const HeaderWrap = styled.div`
  position : absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding : 40px 16px 16px;
  background-color: #263139;
  color: #FFFFFF;
  font-size: 20px;
  z-index : 5;
  & > div {
    display : inline-block;
  }
`
const TitleText = styled.div`
 
`


export default Header;
