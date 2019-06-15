// run command node redux-index in command prompt to see result

// STEP 1. import redux package and import createStore from it for creating store
const { createStore } = require("redux");

//  STEP 4. create default state for reducer
const initialState = {
  number: 0
};

// STEP 3. create reducer for store
// reducer takes 2 things -> state and action
// assign initial state to reducer when state is not defined
const myReducer = (state = initialState, action) => {
  let num = state.number;
  switch (action.type) {
    case "INCREMENT":
      num += action.payload == undefined ? 1 : action.payload;
      return (state = { ...state, number: num });
    case "DECREMENT":
      num -= action.payload == undefined ? 1 : action.payload;
      return (state = { ...state, number: num });
    default:
      return state;
  }
};

//  STEP 2. create store and assign it to vaiable store
/* ---------  store has two things -> state and reducer   -------------

Store is a global object which stores all data  

It is the state of our whole application is stored in an object within a single store. 
There is an only way to change the state is to emit an action, 
an object describing what happened. To specify how actions transform the state, you write pure reducers.
*/

const store = createStore(myReducer);

//  STEP 5. pass decisions to store i.e. increase or decrease number, we do it by dispatching actions to reducer
// ACTIONS - commands
/* Actions are payloads of information that send data from your application to your store. You send them to the store using store.dispatch() */

store.dispatch({ type: "INCREMENT", payload: 2.4 });

store.dispatch({ type: "DECREMENT", payload: 0.9 });

console.log(store.getState());
