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

  deleteItem = (id) => {
    this.setState(({todoData})=> {

      const idx = todoData.findIndex((el)=> el.id === id)

      //[a,,b,c,d,e]
      //[a,b, d,e]

      const newArray = [
        ...todoData.slice(0, idx), 
        ...todoData.slice(idx + 1)];

      return {
        todoData: newArray
      };

    })
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
      onDeleteds={this.deleteItem}/>
  </div>
  )
  }
}


export default App;
