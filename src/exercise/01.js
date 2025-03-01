// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + action.step}
    default:
      break
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    type: null,
    count: initialCount,
  })
  const {count} = state
  function increment() {
    return dispatch({type: 'INCREMENT', step})
  }
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
