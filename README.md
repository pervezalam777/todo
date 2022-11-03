# TODO application
We need to build a basic application with following features
- [x] hardcoded list of todo items
- [x] load static data for todo list item
- [x] refactor code so that it has separate component with well structure
- [x] Closure function : 
- [x] Hooks for state management
  - [x] useState hook:
      - it takes initial state while calling itself
- [x] Manage state in TODO
- [ ] Use event to manipulate todo items
  - [x] Mark as inactive
  - [x] Mark as active
  - [x] Edit text : user can only edit if it is in active state
  - [ ] remove or delete
- [ ] Add new todo
- [ ] Preserve todo list in LocalStorage

- [ ] ***Fetch and send todo list to server


## Learnings
## functional component
- functional component can be state full and state less
- if functional component use any hook then it is state full.
- if it totally depends on props then it is state less

## `Props are Read-Only`
- `Object.freeze`:
- `Object.seal`: 

## folder structure
- `layout component`: 
  - layout component should only render skeleton 
  - should not implement any business logic (e.g. loading data, using data)
- `container component`: 
  - container component should use loaded data to render child components
  - it should not have any specific UI
  - it should control or use business logic to interact with outer world
  - container component should only interact with hooks for business logic
- `component`:
  - component should only render html
  - heavily depend on the props for any functionality
  - it should be dumb component that only and only depends on props
  - also know as presentation component
  - component can use hooks for UI logic


## Controlled form elements ? re-render check ??


## Uncontrolled form elements? re-render check ??
when react do not re-render the application on form element data change
- [x] without useRef 
- [ ] with useRef

## React covered Topics
- [component and props](https://reactjs.org/docs/components-and-props.html)

## UseRef ?

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

