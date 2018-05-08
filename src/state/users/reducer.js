import { combineReducers } from 'redux'
import * as actions from './actions'

const registration = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_REGISTER_BEGIN:
      return { registering: true }

    case actions.USER_REGISTER_SUCCESS:
      return { registering: false }

    case actions.USER_REGISTER_FAILED:
      return { registering: false }

    default:
      return state
  }
}

export default combineReducers({
  registration,
})
