import React from "react";
class AddTodo extends React.Component {
  state = {
    todotext: "",
  };

  changeTodoText = (events) => {
    this.setState({
      todotext: events.target.value,
    });
  };
  submitHandler = (events) => {
    events.preventDefault();
    this.props.addTodoToState(this.state.todotext);
    this.setState({
      todotext: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            onChange={this.changeTodoText}
            value={this.state.todotext}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
