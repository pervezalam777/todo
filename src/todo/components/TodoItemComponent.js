import React from 'react';

function TodoItemComponent(props) {
  const {
    id, 
    desc,
    state,
    mode, 
    onDone: handleDone, 
    onReopen: handleReopen,
    onEdit: handleEdit,
    onSave: handleSave
  } = props;

  function renderActions() {
    if(state === 'active') {
      return (
        <>
          <button id={id} onClick={handleDone}>Done</button>
          <button id={id} onClick={handleEdit}>Edit</button>
        </>
      )
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

  function renderMode() {
    if(mode === 'block'){
      return (
        <>
          <span className={getClasses()}>{desc}</span>
          {renderActions()}
        </>
      )
    } else if(mode === 'edit') {
      return (
        <>
          <input type="text" defaultValue={desc} id={`${id}-text`} />
          <button id={id} onClick={handleSave}>Save</button>
        </>
      )
    }
  }

  return (
    <li id={id}>
      {renderMode()}
    </li>
  )
}

export default TodoItemComponent;