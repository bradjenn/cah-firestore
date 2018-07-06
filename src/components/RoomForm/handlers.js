import { withHandlers } from 'recompose'

export function _onSubmit(props) {
  return evt => {
    evt.preventDefault()

    props.onSubmit(props.roomName)
  }
}

export default withHandlers({
  _onSubmit,
})
