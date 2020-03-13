import React from 'react';
import "./todo-item.css"

class TodoItems extends React.Component {

  state = {
    done: false,
    important: false
  };

  onNameClick = ()=>{
    return (
      this.setState(({done})=>{
        return {
          done: !this.state.done
        }
      })
    )
  }

  onImportantClick=()=>{
    return(
      this.setState( ({important}) => {
        return {
          important: !this.state.important
        }
      }
      )
    )
  }

  render(){

    const {name, onDeleted} = this.props;
    const { done, important } = this.state;

    let classNames = "todo-item";
    if (done) {
      classNames += ' done'; // space before done
    }
    if (important) {
      classNames += ' important'
    }

    return (
      <span className={classNames}>
        <span
          className="todo-item-name"
          onClick={this.onNameClick}>
          {name}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onImportantClick}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );

  }
}
export default TodoItems;