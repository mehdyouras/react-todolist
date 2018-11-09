import {
  ADD_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  DELETE_TODO
} from '../actions/actionTypes'

const initialState = {
  items: [],
};

export const todoReducer = (state = initialState, action) => {
  const { items } = state;

  switch(action.type) {
    case ADD_TODO :
      if(!action.title.length) return state;

      return {
        ...state,
        items: [
          ...items,
          {
            id: items.length ? items[items.length - 1].id + 1 : 0,
            title: action.title,
            isDone: false,
          }
        ]
      }
    case UPDATE_TODO :
      return {
        ...state,
        items: items.map(item => {
          if(item.id === action.id) {
            return {
              ...item,
              isEditing: false,
              title: action.title,
            }
          }
  
          return item;
        })
      }
    case TOGGLE_TODO :
      return {
        ...state,
        items: items.map(item => {
          if (item.id === action.id) {
            return {
              ...item,
              isDone: !item.isDone
            }
          }
  
          return item;
        }),
      }
    case DELETE_TODO :
      let itemIndex = items.findIndex(item => item.id === action.id);

      return {
        ...state,
        items: [
          ...items.slice(0, itemIndex),
          ...items.slice(itemIndex + 1)
        ],
      }
    default: 
      return state;
  }
}