import React, { Component } from "react";
import Header from "./Header";
import "./App.css";
import Todos from "./Todos";
import Addtodo from "./Addtodo";
//import uuid from "uuid/dist/v4";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./About";
import axios from "axios";

class App extends Component {
  state = {
    // The   properties  added  to the  component's state  can  be  accessed  from the state/props.todos  property
    todos: [],
  };

  //finally able  to set the state  of  the  current  component

  // Http  request to Fake Online REST API for Testing and Prototyping
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      this.setState({ todos: res.data });
    });
  }

  //  Toggle  Complete
  markComplete = (id) => {
    console.log("Task " + id + " Completed");

    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      }),
    });
  };

  //Delete Todo
  delTodo = (id) => {
    // The filter  method checks for the condition and returns the same array(...,spread operator),while filtering out the selected  items.
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        });
      });
  };

  addTodo = (title) => {
    console.log(title);
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) => {
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <Addtodo addTodo={this.addTodo} />

                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />

            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
