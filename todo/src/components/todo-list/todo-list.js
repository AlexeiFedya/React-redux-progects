import React from "react";
import "./todo-list.css"
import TodoItems from '../todo-item/todo-item'

const TodoList = ({todos})=> {

    const elements= todos.map((item)=>{

        const { id, ...itemProps} = item // all propeties but no id, in itemProps  

        return (
            <li key={item.id} className="list-group-item">
                <TodoItems {...itemProps}/>
            </li>
    )
    } )

    return (
            <ul className="list-group todo-list">
                {elements}
            </ul>
    )
  }

  export default TodoList;