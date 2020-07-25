import React, { Component } from "react";
import Todoitem from "./Todoitem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    //  using props once again as the todo item(not array resides in app.js)
    return this.props.todos.map((todo) => (
      <Todoitem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

// Best  practice,specifies that  the props that  are present in this class are required

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Todos;
