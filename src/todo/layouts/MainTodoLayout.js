// Following import is no longer require
// if you add it it should not create any problem
// the following is default import
import React from 'react';

// The following is named import
import { data as listInputData } from '../data';

// NOTE: following is functional component
// functional component can be state full and state less
// if functional component use any hook then it is state full.
// if it totally depends on props then it is state less
function MainTodoLayout() {

  function renderListItems() {
    return listInputData.map((todoItem) => {
      return (
        <li key={todoItem.id}>{todoItem.desc}</li>
      )
    })
  }

  return (
    <section>
      <header>
        <h1>Basic todo app</h1>
      </header>
      <main>
        <ul>
          {
            // Javascript code goes here
            renderListItems()
          }
        </ul>
      </main>
      <footer>@example.com</footer>
    </section>
  )
}
// component should be exported as default
export default MainTodoLayout;