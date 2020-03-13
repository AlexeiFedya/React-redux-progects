import React from 'react';
import TodoHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import TodoList from '../todo-list/todo-list'
import ItemStatus from "../item-status/item-status"
import "./app.css"


const App = ()=> {

  const todoData = [
    {name: "Drink milk", important: false, id: 1},
    {name: "Drink alcohol", important: true, id: 2},
    {name: "Drink coffe", important: false, id: 3},
  ]

  return (
    <div  className="todo-app">
      <TodoHeader toDo={"3"} done={"1"}/>
    <div className="top-panel d-flex">
      <SearchPanel/>
      <ItemStatus/>
    </div>
    <TodoList todos={todoData}/>
  </div>
  )
}


export default App;
