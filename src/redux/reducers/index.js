// here we're going to write our reducer function
// always remember: the reducers have to be PURE FUNCTIONS
// (no arguments mutation, and we cannot perform side-effects, and from the same input will always
// emit the same output)

import { initialState } from '../store'

const mainReducer = (state = initialState, action) => {
  // we have to make sure that in every case we return the new state of the application
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        // every object you return from the reducer function
        // is the new state of the application
        // as a primary rule, you don't want to lose anything on the road
        ...state,
        count: state.count + 1,
      }

    default:
      return state
    // we don't want to break anything if the action that was just dispatched
    // has an unrecognized type
  }
}

export default mainReducer
