import React, { Component } from "react";

const Todo = (props) => (
  <li>
    {props.todo} <span onClick={() => props.deleteTodo(props.todo)}>[x]</span>
  </li>
);

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => {
          return (
            <Todo todo={todo} key={todo} deleteTodo={this.props.deleteTodo} />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
