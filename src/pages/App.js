import styled from "styled-components";


function App() {
  return (
    <TodoWrap>
      <ButtonWrap></ButtonWrap>
    </TodoWrap>
  );
}

const TodoWrap = styled.div`
max-width: 800px;
margin: 0 auto;
`

const ButtonWrap = styled.div`
width: 500px;
height: 500px;
background-color: black;
`


export default App;
