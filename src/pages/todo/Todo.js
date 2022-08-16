import React , {useState , useCallback} from 'react' // useState를 이용해 상태관리를 할 예정
import styled from "styled-components";
import TodoTitle from "./components/TodoTitle";
import TodoInput from "./components/TodoInput";
import TodoLists from "./components/TodoLists";

function Todo() {
  
  // 배열로 리스트를 생성
  const [TodoListsItem, setTodos] = useState([
    {
      item : '아이템',
      checkingItem: false,
      timeStamp : 202208141403 // 저는 타임스탬프를 집어 넣을거에요
    },
    {
      item : '아이템ㅁㄴㅇ',
      checkingItem: false,
      timeStamp : 202208141406 // 저는 타임스탬프를 집어 넣을거에요
    },
    {
      item : '아이템ㅁㄴㅇ',
      checkingItem: false,
      timeStamp : 202208141406 // 저는 타임스탬프를 집어 넣을거에요
    }
  ]);
  // setTodos를 이용해 삭제 , 수정 , 추가를 할 예정

  const onChange = useCallback(e=>{
    setTodos(e.target.value);
  },[])
  const onSaveTodo = useCallback(
      e => {
        console.log('asdasd')
        setTodos(''); //value 초기화
        //기본이벤트(새로고침) 방지
        e.preventDefault();
      }
  ,[TodoListsItem]);

  const TodoListsItemCheckedFalse = TodoListsItem.filter( accr => accr.checkingItem === false);

  return (
    <>
      <TodoWrap>
        <TodoTitle Text ="ToDoList" onSaveTodo={onSaveTodo}/>
        <TodoInput />
        <TodoListsWrap>
          <TodoListCount>할 일이 {TodoListsItemCheckedFalse.length}개 남았습니다~</TodoListCount>
          <TodoLists TodoListsItem = {TodoListsItem}/>
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
