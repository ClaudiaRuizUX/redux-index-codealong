import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map((todo, id) => 
  <Todo
  key={id}
  text={todo}
  delete={this.props.deleteTodo}
  />)

  render() {
    return(
      <ol>
        {this.renderTodos()}
      </ol>
    );
  }
};
const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: todo => dispatch({ type: 'DELETE_TODO', payload: todo})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

