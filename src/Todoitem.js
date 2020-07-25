import React, { Component } from "react";
import PropTypes from "prop-types";

export class Todoitem extends Component {
  //rce tab  generates a component

  // Arrow function  which  returns a style

  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",

      textDecoration: this.props.todo.completed //ternary operator,checks if condition  is through
        ? "line-through"
        : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo; //  Destructuring,instead of using this.props.todo

    return (
      // Inline css uses camelcase instead of hyphens,using props allows us to call the markComplete method from another class and pass it an id

      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {""}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            {" "}
            X{" "}
          </button>
        </p>
      </div>
    );
  }
}

Todoitem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

// Either use {{backgroundColor :  '#f4f4f4'}}  or this  notation style = {itemStyle}

export default Todoitem;
