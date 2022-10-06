// Following import is no longer require
// if you add it it should not create any problem
import React from 'react';

// NOTE: following is functional component
// functional component can be state full and state less
// if functional component use any hook then it is state full.
// if it totally depends on props then it is state less
function MainTodoLayout() {
  return (
    <section>
      <heading>
        <h1>Basic todo app</h1>
      </heading>
      <main>
        <ul>
          <li>task 1</li>
          <li>task 2</li>
          <li>task 3</li>
        </ul>
      </main>
      <footer>@example.com</footer>
    </section>
  )
}
// component should be exported as default
export default MainTodoLayout;