import { firestore, auth } from '../../firebase'
import * as actions from './actions'

export function createRoom(roomName) {
  return dispatch => {
    dispatch({ type: actions.CREATE_ROOM_BEGIN })
    const roomsRef = firestore.collection('rooms')

    return roomsRef
      .add({
        name: roomName,
        creatorID: auth.currentUser.uid,
      })
      .then(querySnapshot => {
        dispatch({ type: actions.CREATE_ROOM_SUCCESS })
        return Promise.resolve(querySnapshot)
      })
      .catch(error => {
        dispatch({ type: actions.CREATE_ROOM_FAILED })
        return Promise.reject(error)
      })
  }
}

export function fetchRooms() {
  return dispatch => {
    dispatch({ type: actions.FETCH_ROOMS_BEGIN })
    const roomsRef = firestore.collection('rooms')

    return roomsRef.onSnapshot(handleUpdates, handleErrors)

    function handleUpdates(snapshot) {
      snapshot.docChanges.forEach(updateRooms)

      function updateRooms(change) {
        const actionsKey = {
          added: actions.ROOM_ADDED,
          modified: actions.ROOM_MODIFIED,
          removed: actions.ROOM_REMOVED,
        }

        dispatch({
          type: actionsKey[change.type],
          payload: { id: change.doc.id, ...change.doc.data() },
        })

        return Promise.resolve(change.doc)
      }

      return Promise.resolve(snapshot)
    }

    function handleErrors(error) {
      dispatch({ type: actions.FETCH_ROOMS_FAILED })
      return Promise.reject(error)
    }
  }
}
