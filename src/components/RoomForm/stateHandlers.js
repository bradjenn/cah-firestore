import { withStateHandlers } from 'recompose'

const initialState = {
  roomName: '',
}

export function setRoomName() {
  return roomName => ({ roomName })
}

export default withStateHandlers(initialState, {
  setRoomName,
})
