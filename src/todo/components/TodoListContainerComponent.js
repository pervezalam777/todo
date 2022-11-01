import React, {useState} from 'react';

// The following is named import
import { data as listInputData } from '../data';
import TodoItemComponent from './TodoItemComponent';

function TodoListContainerComponent() {
  const [stateData , fnToChangeStateData] = useState(listInputData); // React.useState(/* initial state */)
  // const useStateOutput = useState(listInputData);
  // const stateData = useStateOutput[0]
  // const fnToChangeStateData = useStateOutput[1]
  console.log('re-render: TodoListContainerComponent')

  // useEffect(() => {
  //   setTimeout(() => {
  //     fnToChangeStateData([
  //       ...stateData,
  //       { id: 4, desc:'My revision time will at 9:00 pm everyday', state: 'active'},
  //     ])
  //   }, 2000)
  // }, [])

  function renderListItems() {
    return stateData.map((todoItem) => {
      return (
        <TodoItemComponent key={todoItem.id} {...todoItem} onDone={handleDone} onReopen={handleReopen} />
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

  function handleDone(eventObject) {
    //console.log('event object targe id is', eventObject.target.id);
    const { target : { id }} = eventObject;
    //const id = eventObject.target.id; // same as above
    const newState = stateData.map((item) => {
      if(item.id == id) {
        return { ...item, state:'inactive' }
      }
      return item;
    });
    // newState and stateData object are not same reference object
    // that is why react change detection cycle will trigger and
    // update the UI
    fnToChangeStateData(newState);
  }

  function handleReopen(eventObject) {
    //console.log('event object targe id is', eventObject.target.id);
    const { target : { id }} = eventObject;
    //const id = eventObject.target.id; // same as above
    const newState = stateData.map((item) => {
      //TODO: resolve this with === 
      if(item.id == id) {
        return { ...item, state:'active' }
      }
      return item;
    });
    // newState and stateData object are not same reference object
    // that is why react change detection cycle will trigger and
    // update the UI
    fnToChangeStateData(newState);
  }

  //TODO: as handleDone and handleReopen function are almost identical
  // so create a third function that will keep the identical code inside.
  // handleDone and handleReopen will call that function with required argument

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