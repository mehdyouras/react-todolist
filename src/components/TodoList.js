import React from 'react';

import { connect } from "react-redux";
import { addTodo, updateTodo, toggleTodo, deleteTodo } from "../store/actions/actionCreators";

import TodoItem from './TodoItem'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: '',
    }
  }

  render() {
    const { items, addTodo, updateTodo, toggleTodo, deleteTodo } = this.props;
    const { newTitle } = this.state;

    return (
      <div>
        <label>
          Ajouter une tâche
        </label> 
        <input
          onChange={ (e) => this.setState({ newTitle: e.target.value }) }
          ref={ref => this.input = ref}
        />
        <button
          onClick={ () => {
            addTodo(newTitle)
            this.input.value = ""
          } }
        >
          Ajouter
        </button>
        <ul>
          { 
            items.map((item) => {
              return (
                <TodoItem
                  key={ item.id } 
                  item={ item }
                  onToggleItemStatus={ toggleTodo }
                  onDeleteItem={ deleteTodo }
                  onUpdateItem={ updateTodo }
                />
              ) 
            }) 
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = { addTodo, updateTodo, toggleTodo, deleteTodo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

