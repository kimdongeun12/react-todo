import React , {useState , useRef} from 'react' // useState를 이용해 상태관리를 할 예정
import styled from "styled-components";
import StyleButton from "../../styles/StyleButton"
import { useTodoController , useTodoState } from '../TodoContext';

function TodoInput() {
  const [inputValue, setValue] = useState('');
  const onChange = e => setValue(e.target.value);
  const todos = useTodoState();
  const dispatch = useTodoController();

  const nextId = useRef(todos.length);
  
  const onSubmit = e => {
    e.preventDefault();
    if(inputValue.length <= 0 ) {
      alert('할 일을 적어주세용~')
      return false;
    }

    nextId.current++; //nextId 1씩 더하기
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        item : inputValue,
        checked: false,
      }
    });
    
    setValue('');
  };


  return (
    <>
      <ModalWrap>
        <TextWrap>
          <TextField onSubmit={onSubmit}>
            <input id="todoText" onChange={onChange} value={inputValue} type="text" placeholder='할 일을 적어주세용!'/>
            {/* 버튼을 컴포넌트화 하여 이벤트 전달 */}
            <StyleButton btnType="submit" buttonText="저장"/>
            <StyleButton btnType="button" buttonText="취소"/>
          </TextField>
        </TextWrap>
      </ModalWrap>
    </>
  );
}

const ModalWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index : 15;
  visibility: hidden;
`

const TextWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 30px;
  width: 100%;
  max-width: 320px;
  transform: translate(-50% , -50%) scale(0);
  background-color: #ffffff;
  opacity : 0;
  transition: cubic-bezier(0.1,1.5,0.37,1) 0.4s;
`
const TextField = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > input[type="text"] {
    display: block;
    width: 100%;
    padding-bottom: 8px;
    border: 0 none;
    border-bottom: 1px solid #dddddd;
    color : #000000
  }
`

// export default React.memo(TodoInput);

export default TodoInput;
