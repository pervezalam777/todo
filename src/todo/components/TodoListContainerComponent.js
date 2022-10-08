import React from 'react';

// The following is named import
import { data as listInputData } from '../data';
import TodoItemComponent from './TodoItemComponent';

function TodoListContainerComponent() {
  function renderListItems() {
    return listInputData.map((todoItem) => {
      return (
        <TodoItemComponent key={todoItem.id} {...todoItem} />
        /**
         * or
         * <TodoItemComponent 
         *  id={todoItem.id}
         *  desc={todoItem.desc}
         *  state={todoItem.state}
         * />
         */
      )
    })
  }

  return (
    <ul>
      {
        // Javascript code goes here
        renderListItems()
      }
    </ul>
  )
}

export default TodoListContainerComponent;