import styled from "styled-components";

function Header() {
  return (
    <>
      <HeaderWrap>
        {/* 애초에 TitleText를 가리키고 있지도 않는데 그냥 감싸려고 TitleText 해놓은거 네이밍 똑바로 */}
        <TitleTextWrap>
          <TitleText>ToDo실습</TitleText>
          {/* span? styled component 쓸거면 저렇게 span 때려넣지 말고 차라리 그냥 아래 주석처리 해놓은것처럼  */}
        </TitleTextWrap>
      </HeaderWrap>
    </>
  );
}

const HeaderWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding: 40px 16px 16px;
  background-color: #36daac;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  z-index: 5;
  & > div {
    display: inline-block;
  }
`;
const TitleTextWrap = styled.div``;
const TitleText = styled.span``;

export default Header;
