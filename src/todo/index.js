import MainTodoLayout from "./layouts/MainTodoLayout";

const exposedObject = {
  MainTodoLayout
}
// Resolved: Assign object to a variable before exporting as module default  import/no-anonymous-default-export
export default exposedObject;

/**
both of the following are same
{
  MainTodoLayout: MainTodoLayout
}

or 

{
  MainTodoLayout
}
 */