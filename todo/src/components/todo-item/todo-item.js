import React from 'react';
import "./todo-item.css"

class TodoItems extends React.Component {
  render(){

    const {name, important=false} = this.props;

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    return (
      <span className="todo-item">
        <span
          className="todo-item-label"
          style={style}>
          {name}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );

  }
}
export default TodoItems;