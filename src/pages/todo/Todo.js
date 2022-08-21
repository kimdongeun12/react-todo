import React , {useState , useCallback , useRef} from 'react' // useState를 이용해 상태관리를 할 예정
import styled from "styled-components";
import TodoTitle from "./components/TodoTitle";
import TodoInput from "./components/TodoInput";
import TodoLists from "./components/TodoLists";

function Todo() {
  
  // 배열로 리스트를 생성
  const [todos, setTodos] = useState([
    // {id:1 , item: "todoList" , checked: true},
  ]);
  // setTodos를 이용해 삭제 , 수정 , 추가를 할 예정
  const nextId = useRef(todos.length);

  const onInsert = useCallback((inputValue) => {
    nextId.current++; //nextId 1씩 더하기
    const todo = {
      id: nextId.current,
      item : inputValue,
      checked: false,
    };
    setTodos(todos.concat(todo)); //concat(): 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열 반환
  },[todos]);
  
  // 추가 , 삭제 , 변경 된 체크값을 재배열함
  const unChecked = todos.filter(todo => !todo.checked);

  return (
    <>
      <TodoWrap>
        <TodoTitle TitleName ="ToDoList" />
        <TodoInput onInsert = {onInsert}/>
        <TodoListsWrap>
          <TodoListCount>할 일이 {unChecked.length}개 남았습니다~</TodoListCount>
          <TodoLists todos = {todos}/>
        </TodoListsWrap>
      </TodoWrap>
    </>
  );
}





const TodoWrap = styled.div`
  position: absolute;
  left: 0;
  top : 0;
  padding: 80px 16px 16px;
  width: 100%;
  min-height: 100%;
  background-color : #ffffff;
`

const TodoListsWrap = styled.div`
  width: 100%;
  border: 1px solid #dddddd;
  background-color : #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 18px -9px;
`
const TodoListCount = styled.div`
  padding: 8px 16px 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid #dddddd;
  color: #36daac;
  font-weight: bold;
`


export default Todo;
