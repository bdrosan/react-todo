import { Component } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ["Bananas", "Apple", "Orange"],
    };
  }
  addTodo = (todo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo],
    }));
  };
  deleteTodo = (value) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo !== value),
    }));
  };
  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
