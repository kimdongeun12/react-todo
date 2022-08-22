import React , {createContext , useReducer  , useContext } from 'react' // useState를 이용해 상태관리를 할 예정


const TodoStateContext = createContext(null);
const TodoControllContext = createContext(null);


const TodosLists = [
  // {id:1 , item: "todoList" , checked: false},
];



function todoReducer(TodoState, action) {
  switch (action.type) {
    case 'CREATE':
      return TodoState.concat(action.todo);
    case 'CHECK':
      return TodoState.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    case 'REMOVE':
      return TodoState.filter(todo => todo.id !== action.id);
    default:
      return TodoState;
  }
}

export function TodoContext({ children }) {
  const [TodoState, dispatch] = useReducer(todoReducer, TodosLists);

  return (
    <>
      <TodoStateContext.Provider value={TodoState}>
        <TodoControllContext.Provider value={dispatch}>
        { children }
        </TodoControllContext.Provider>
      </TodoStateContext.Provider>
    </>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}
export function useTodoController() {
  return useContext(TodoControllContext);
}


