import React from 'react';

function TodoItemComponent(props) {
  const {id, desc} = props;
  return (
    <li id={id}>{desc}</li>
  )
}

export default TodoItemComponent;