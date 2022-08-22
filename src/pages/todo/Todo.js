import React , {useState } from 'react' 
import styled from "styled-components";
import TodoTitle from "./components/TodoTitle";
import TodoInput from "./components/TodoInput";
import TodoLists from "./components/TodoLists";
import { TodoContext } from "./TodoContext";


function Todo() {
  const [isModal , setModal] = useState({
    bool : false , 
    type : null,
    listID : null
  });


  const openModal = (id) => {
    if(!isNaN(id)){
      console.log(id)
      setModal({
        bool : true , 
        type : "MODIFY",
        listID : id
      })
    }else{
      setModal({
        bool : true , 
        type : "CREATE",
        listID : null
      })
    }
  };

  const closeModal = () => {
    setModal({
      bool : false , 
      type : null,
      listID : null
    })
  }

  return (
    <TodoContext>
      <TodoWrap>
        <TodoTitle TitleName ="ToDoList" /> {/* props 전달방식 */}
        <TodoListsWrap>
          <TodoLists openModal = {openModal}/>
        </TodoListsWrap>
        <TodoInput isModal= {isModal} close= {closeModal}/>
      </TodoWrap>
    </TodoContext>
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
  position: relative;
  width: 100%;
  border: 1px solid #dddddd;
  background-color : #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 18px -9px;
`

export default Todo;
