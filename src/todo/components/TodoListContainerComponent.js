import React, {useEffect, useState} from 'react';

// The following is named import
import { data as listInputData } from '../data';
import TodoItemComponent from './TodoItemComponent';

function TodoListContainerComponent() {
  const [stateData , fnToChangeStateData] = useState(listInputData); // React.useState(/* initial state */)
  // const useStateOutput = useState(listInputData);
  // const stateData = useStateOutput[0]
  // const fnToChangeStateData = useStateOutput[1]
  console.log('re-render: TodoListContainerComponent')

  useEffect(() => {
    setTimeout(() => {
      fnToChangeStateData([
        ...stateData,
        { id: 4, desc:'My revision time will at 9:00 pm everyday', state: 'active'},
      ])
    }, 2000)
  },[])
  function renderListItems() {
    return stateData.map((todoItem) => {
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