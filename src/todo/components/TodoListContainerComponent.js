import React, {useState} from 'react';

// The following is named import
import { data as listInputData } from '../data';
import TodoItemComponent from './TodoItemComponent';

function TodoListContainerComponent() {
  const [stateData , fnToChangeStateData] = useState(listInputData);
  function renderListItems() {
    return stateData.map((todoItem) => {
      return (
        <TodoItemComponent 
          key={todoItem.id} 
          {...todoItem} 
          onDone={handleDone} 
          onReopen={handleReopen}
          onEdit={handleEdit}
          onSave={handleSave}
        />
      )
    })
  }

  function handleDone(eventObject) {
    const { target : { id }} = eventObject;
    handleStateChange(id, 'inactive');
  }

  function handleReopen(eventObject) {
    const { target : { id }} = eventObject;
    handleStateChange(id, 'active');
  }

  function handleStateChange(id, state) {
    const newState = stateData.map((item) => {
      if(item.id.toString() === id.toString()) {
        return { ...item, state }
      }
      return item;
    });
    fnToChangeStateData(newState);
  }

  function handleEdit(eventObject) {
    const { target : { id }} = eventObject;
    const newState = stateData.map((item) => {
      if(item.id.toString() === id.toString()) {
        return { ...item, mode:'edit' }
      }
      return item;
    });
    fnToChangeStateData(newState);
  }

  function handleSave(eventObject) {
    const { target : { id }} = eventObject;
    const textInputElement = document.getElementById(`${id}-text`)
    const desc = textInputElement.value;
    const newState = stateData.map((item) => {
      if(item.id.toString() === id.toString()) {
        return { ...item, mode:'block', desc }
      }
      return item;
    });
    fnToChangeStateData(newState);
  }

  return (
    <ul>
      {
        renderListItems()
      }
    </ul>
  )
}

export default TodoListContainerComponent;