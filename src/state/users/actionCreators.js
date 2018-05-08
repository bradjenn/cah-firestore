import firebase from '../../firebase'
import * as actions from './actions'

export function register({ email, password }) {
  return dispatch => {
    dispatch({ type: actions.USER_REGISTER_BEGIN })

    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(sendEmailVerification)
      .then(dispatchUserRegistered)
      .catch(handleErrors)

    function sendEmailVerification(user) {
      return user
        .sendEmailVerification()
        .then(() => Promise.resolve(user))
        .catch(error => Promise.reject(error))
    }

    function dispatchUserRegistered(user) {
      dispatch({ type: actions.USER_REGISTER_SUCCESS })
      return Promise.resolve(user)
    }

    function handleErrors(error) {
      dispatch({ type: actions.USER_REGISTER_FAILED })
      return error
    }
  }
}

export function login({ email, password }) {
  return dispatch => {
    dispatch({ type: actions.USER_LOGIN_BEGIN })

    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(dispatchUserLoggedIn)
      .catch(handleErrors)

    // function sendEmailVerification(user) {
    //   return user.sendEmailVerification()
    //     .then(() => Promise.resolve(user))
    //     .catch(error => Promise.reject(error))
    // }

    function dispatchUserLoggedIn(user) {
      console.log(user)

      dispatch({
        type: actions.USER_LOGIN_SUCCESS,
        payload: {},
      })
      return Promise.resolve(user)
    }

    function handleErrors(error) {
      dispatch({ type: actions.USER_LOGIN_FAILED })
      return error
    }
  }
}
