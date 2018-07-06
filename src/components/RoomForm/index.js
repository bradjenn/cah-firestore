import { compose } from 'recompose'

import RoomForm from './RoomForm'
import stateHandlers from './stateHandlers'
import handlers from './handlers'

const enhance = compose(stateHandlers, handlers)

export default enhance(RoomForm)
