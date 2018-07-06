import { auth, firestore } from '../../firebase'
import * as actions from './actions'

export function fetchUser() {
  return dispatch => {
    dispatch({ type: actions.USER_FETCH_BEGIN })

    return auth.onAuthStateChanged(user => {
      setTimeout(() => {
        if (user) {
          const usersRef = firestore.collection('users')
          usersRef
            .doc(user.uid)
            .get()
            .then(doc => {
              dispatch({
                type: actions.USER_FETCH_SUCCESS,
                payload: doc.data(),
              })

              return Promise.resolve(doc.data())
            })
        } else {
          dispatch({ type: actions.USER_FETCH_FAILED })
          return Promise.reject()
        }
      }, 0)
    })
  }
}

export function register({ email, password }) {
  return dispatch => {
    dispatch({ type: actions.USER_REGISTER_BEGIN })

    return auth
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

    return auth
      .signInWithEmailAndPassword(email, password)
      .then(dispatchUserLoggedIn)
      .catch(handleErrors)

    function dispatchUserLoggedIn(user) {
      dispatch({
        type: actions.USER_LOGIN_SUCCESS,
        payload: user,
      })
      return Promise.resolve(user)
    }

    function handleErrors(error) {
      dispatch({ type: actions.USER_LOGIN_FAILED })
      return error
    }
  }
}
