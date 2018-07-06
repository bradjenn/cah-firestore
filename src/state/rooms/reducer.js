import * as actions from './actions'

export default (state = {}, action) => {
  switch (action.type) {
    case actions.ROOM_MODIFIED:
    case actions.ROOM_ADDED:
      return {
        ...state,
        [action.payload.id]: { ...action.payload },
      }

    case actions.ROOM_REMOVED:
      const newState = { ...state }
      delete newState[action.payload.id]
      return newState

    default:
      return state
  }
}
