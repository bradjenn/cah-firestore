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

const isAuthenticating = (state = false, action) => {
  switch (action.type) {
    case actions.USER_FETCH_BEGIN:
      return true
    case actions.USER_FETCH_SUCCESS:
    case actions.USER_FETCH_FAILED:
      return false
    default:
      return state
  }
}

const isAuthenticated = (state = false, action) => {
  switch (action.type) {
    case actions.USER_FETCH_SUCCESS:
      return true
    case actions.USER_FETCH_FAILED:
      return false
    default:
      return state
  }
}

const initialProfileState = {
  displayName: null,
  email: '',
  photoUrl: undefined,
  emailVerified: false,
  uid: null,
}

const profile = (state = initialProfileState, { type, payload }) => {
  switch (type) {
    case actions.USER_FETCH_SUCCESS:
      return {
        displayName: payload.displayName,
        email: payload.email,
        photoUrl: payload.photoUrl,
        emailVerified: payload.emailVerified,
        uid: payload.uid,
      }
    case actions.USER_FETCH_FAILED:
      return {}
    default:
      return state
  }
}

export default combineReducers({
  registration,
  profile,
  isAuthenticated,
  isAuthenticating,
})
