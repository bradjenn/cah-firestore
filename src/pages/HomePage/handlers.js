import { withHandlers } from 'recompose'

export const _onCreateRoom = ({ history, createRoom }) => roomName => {
  return createRoom(roomName).then(gotoRoom)

  function gotoRoom(querySnapshot) {
    history.push(`/${querySnapshot.id}`)
  }
}

export default withHandlers({
  _onCreateRoom,
})
