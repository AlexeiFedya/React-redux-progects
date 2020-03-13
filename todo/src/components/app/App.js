import React from 'react';
import TodoHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import TodoList from '../todo-list/todo-list'
import ItemStatus from "../item-status/item-status"
import "./app.css"


class App extends React.Component {

  state={
      todoData: [
        {name: "Drink milk", important: false, id: 1},
        {name: "Drink alcohol", important: true, id: 2},
        {name: "Drink coffe", important: false, id: 3},
      ]
  }

  render (){
  return (
    <div  className="todo-app">
      <TodoHeader toDo={"3"} done={"1"}/>
    <div className="top-panel d-flex">
      <SearchPanel/>
      <ItemStatus/>
    </div>
    <TodoList
      todos={this.state.todoData}
      onDeleteds={(id)=> console.log("del", id)}/>
  </div>
  )
  }
}


export default App;
