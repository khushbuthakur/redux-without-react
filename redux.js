// run command node redux-index in command prompt to see result

// calculator reducer
const { createStore } = require("redux");

const initialState = {
  num1: 10,
  num2: 5,
  result: 0
};

const myReducer = (state = initialState, action) => {
  let { num1, num2, result } = state;
  switch (action.type) {
    case "ADD":
      result = num1 + num2;
      return {
        ...state,
        result: result
      };

    case "MULTIPLY":
      result = num1 * num2;
      return {
        ...state,
        result: result
      };

    default:
      return state;
  }
};

const store = createStore(myReducer);

store.dispatch({ type: "MULTIPLY" });

console.log(store.getState(), "multiplication of numbers");
