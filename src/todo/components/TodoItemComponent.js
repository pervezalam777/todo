import React from 'react';

function TodoItemComponent(props) {
  const {id, desc, state, onDone: handleDone, onReopen: handleReopen} = props;

  function renderActions() {
    if(state === 'active') {
      return <button id={id} onClick={handleDone}>Done</button>
    }
    if(state === 'inactive') {
      return <button id={id} onClick={handleReopen}>Re-open</button>
    }
    return null;
  }

  function getClasses() {
    let classes = 'item-desc';
    if(state === 'active') {
      classes += ' active'
    }
    return classes;
  }

  return (
    <li id={id}>
      <span className={getClasses()}>{desc}</span>
      {renderActions()}
    </li>
  )
}

export default TodoItemComponent;