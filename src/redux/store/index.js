// this is going to be the main store file
// this is where the redux store gets initialized

import { createStore } from 'redux'
import mainReducer from '../reducers'

// writing the initial state for the whole app!
export const initialState = {
  count: 0,
}

const configureStore = createStore(
  // this function takes up to three arguments:
  // 1) the main reducer function
  // 2) the initial state of the app
  // 3) a function for middlewares or external plugins
  mainReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore
