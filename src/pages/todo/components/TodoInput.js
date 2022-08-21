import React , {useState , useCallback} from 'react' // useState를 이용해 상태관리를 할 예정
import styled from "styled-components";
import StyleButton from "../../styles/StyleButton"

function TodoInput({onInsert}) {
  const [inputValue, setValue] = useState('');
  const onChange = e => setValue(e.target.value);
  const onSaveTodo = useCallback(
      e => {
        // submit버튼시 화면 전환을 막기
        e.preventDefault();

        // 전송한 데이터를 onInsert함수에 전달
        onInsert(inputValue);
        
        // 전달한 데이터를 초기화 하는 역할
        setValue('');
      }
  ,[onInsert , inputValue]);

  return (
    <>
      <TextWrap>
        <TextField>
          <input id="todoText" onChange={onChange} value={inputValue} type="text" placeholder='할 일을 적어주세용!'/>
          {/* 버튼을 컴포넌트화 하여 이벤트 전달 */}
          <StyleButton btnType="submit" clickEvent={onSaveTodo} buttonText="저장"/>
        </TextField>
      </TextWrap>
    </>
  );
}

const TextWrap = styled.div`
  margin-bottom: 24px;
`
const TextField = styled.form`
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
`


export default TodoInput;
