import React from 'react'

import styled from 'styled-components'
import TodoActions from './TodoActions';

const StyledTodoItem = styled.li`
  &.done {
    text-decoration: line-through
  }
`

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editedTitle: '',
    }
  }
  render() {
    const { isEditing, editedTitle } = this.state;
    const { item, onToggleItemStatus, onDeleteItem, onUpdateItem } = this.props;
    
    return (
      <StyledTodoItem 
        className={ item.isDone && !isEditing ? 'done' : '' }
      >
        {
          !isEditing ? 
            <React.Fragment>
              <span
                onClick={ () => onToggleItemStatus(item.id) }
              >
                { item.title }
              </span>
              <TodoActions
                item={ item }
                onDeleteItem={ onDeleteItem }
                onEditItem={ () => this.setState({ isEditing: true, editedTitle: item.title }) }
              />
            </React.Fragment>
          :
            <React.Fragment>
              <input 
                value={ editedTitle }
                onChange={(e) => {this.setState({ editedTitle: e.target.value})}}
              />
              <button
                onClick={ () => {
                  onUpdateItem(item.id, editedTitle);
                  this.setState({ isEditing: false })
                } }
              >
                Enregistrer
              </button>
            </React.Fragment>
        }
        
      </StyledTodoItem>
    );
  }
}

export default TodoItem;