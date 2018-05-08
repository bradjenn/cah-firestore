import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import userReducer from './users/reducer'

export const reducers = combineReducers({
  userReducer,
})

const composeEnhancers = composeWithDevTools({})

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
)

const state = {
  store,
  reducers,
}

export default state
