/**
 * - A function inside a function is a closure function
 * - Closure function can access 
 *  - outer function: variables, functions, parameters
 *  - module (every js file) variables
 *  - global (window) variable and function
 *  - its own variable, function and parameters
 * 
 * props:
 * - support robust functional programming
 * - keep variables safe inside
 * 
 * cons:
 * - If it is not used wisely it could lead to memory leak issues
 *  - makes application unresponsive
 *  - hang the entire application
 *  - close abruptly  
 */
const defaultGreeting = 'Namaste!!'
function outerFn(name){
  const greetings = `Hello!! ${name}`;
  function sayGreetings() {
    console.log(greetings);
  }
  function innerFn(moreGreetings) { // closure function
    const enoughOfGreetings = 'Ok!! bye '+ name;
    sayGreetings();
    console.log(`${moreGreetings}!!! to ${name}`);
    console.log('greet again', greetings);
    console.log('say default greeting', defaultGreeting, name);
    console.log('global variable access of orientation: ', window.screen.orientation.type);
    console.log(enoughOfGreetings)
  }
  return innerFn;
}

const closureFn = outerFn('Pervez'); // closureFn === innerFn
closureFn('Good evening')



/**
 * useState mock
 */
function usStateMock(initialData) {
  let data = initialData;

  function changeHandler(newData) {
    data.name = newData.name;
    // React lifecycle method
  }

  return [data, changeHandler]
}

const [data, setData] = usStateMock({name: 'pervez'});
console.log('data is ', data);
setData({name: 'Vijay'});
console.log('updated data is ', data);