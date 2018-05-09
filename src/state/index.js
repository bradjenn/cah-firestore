import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import userReducer from './user/reducer'

export const reducers = combineReducers({
  user: userReducer,
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
