import { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoInput: "",
    };
  }
  handleChange = (event) => {
    this.setState({ todoInput: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.todoInput);
    this.setState({ todoInput: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add todo"
          value={this.state.todoInput}
          onChange={(event) => this.handleChange(event)}
        />
        <input type="submit" value="ADD" />
      </form>
    );
  }
}

export default TodoForm;
