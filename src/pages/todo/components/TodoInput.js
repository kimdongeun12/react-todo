import React , {useState , useRef , useEffect } from 'react' // useState를 이용해 상태관리를 할 예정
import styled , {css} from "styled-components";
import StyleButton from "../../styles/StyleButton"
import { useTodoController , useTodoState } from '../TodoContext';


function TodoInput({isModal , close}) {
  const IsOpen = isModal.bool
  const [inputValue, setValue] = useState('');
  const onChange = e => setValue(e.target.value);
  const todos = useTodoState();
  const dispatch = useTodoController();
  const nextId = useRef(todos.length);
  const todoInputRef = useRef(null)

  useEffect(() => {
    // if(IsOpen){
    //   todoInputRef.current.focus()
    // }
  })

  const onSubmit = e => {
    e.preventDefault();
    if(inputValue.length <= 0 ) {
      alert('할 일을 적어주세용~')
      return false;
    };
    let TodoID = nextId.current;
    if(isModal.type === 'CREATE'){
      TodoID = nextId.current++; //nextId 1씩 더하기
    }else if(isModal.type === 'MODIFY'){
      TodoID = isModal.listID;
    };

    dispatch({
      type: isModal.type,
      todo: {
        id: TodoID,
        item : inputValue,
        checked: false,
      }
    });
    setValue('');
    close();
  };

  return (
    <>
      <ModalWrap IsOpen = {isModal.bool}>
        <TextWrap>
          <TextField onSubmit={onSubmit}>
            <input id="todoText" onChange={onChange} value={inputValue} type="text" ref={todoInputRef} placeholder='할 일을 적어주세용!'/>
            {/* 버튼을 컴포넌트화 하여 이벤트 전달 */}
            <StyleButton btnType="submit" buttonText="저장"/>
            <StyleButton btnType="button" buttonText="취소" clickEvent = { close }/>
          </TextField>
        </TextWrap>
      </ModalWrap>
    </>
  );
};

const ModalWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index : 15;
  visibility: hidden;
  ${(props) =>
    props.IsOpen && //primary 가 존재할 경우
    css`
      visibility: visible;
      & > div {
        transform: translate(-50% , -50%) scale(1);
        opacity : 1;
      };
    `}
  `

const TextWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  max-width: 320px;
  transform: translate(-50% , -50%) scale(0);
  background-color: #ffffff;
  opacity : 0;
  transition: cubic-bezier(0.1,1.3,0.37,1) 0.8s;
`
const TextField = styled.form`
  display: flex;
  padding: 24px 12px 8px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  & > input[type="text"] {
    display: block;
    width: 100%;
    padding-bottom: 8px;
    border: 0 none;
    border-bottom: 1px solid #dddddd;
    color : #000000;
    margin-bottom: 24px;
  };
  & > button {
    width: calc(50% - 2px);
  }
`

// export default React.memo(TodoInput);

export default TodoInput;
