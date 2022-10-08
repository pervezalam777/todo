// Following import is no longer require
// if you add it it should not create any problem
// the following is default import
import React from 'react';

import TodoListContainerComponent from '../components/TodoListContainerComponent';

// NOTE: following is functional component
// functional component can be state full and state less
// if functional component use any hook then it is state full.
// if it totally depends on props then it is state less
function MainTodoLayout() {
  return (
    <section>
      <header>
        <h1>Basic todo app</h1>
      </header>
      <main>
        <TodoListContainerComponent />
      </main>
      <footer>@example.com</footer>
    </section>
  )
}
// component should be exported as default
export default MainTodoLayout;