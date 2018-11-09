import React from 'react'

class TodoActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

    };
  }
  render() {
    const { item, onEditItem, onDeleteItem } = this.props;

    return (
      <React.Fragment>
        <button
          onClick={ () => onEditItem(item.id) }
        >
          edit
        </button>
        <button
          onClick={ () => onDeleteItem(item.id) }
        >
          x
        </button>
      </React.Fragment>
    );
  }
}

export default TodoActions;