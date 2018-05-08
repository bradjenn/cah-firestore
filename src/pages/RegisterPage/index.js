import { withRouter } from 'react-router-dom'
import { bindActionCreators, compose } from 'redux'
import { setDisplayName } from 'recompose'
import { connect } from 'react-redux'

import RegisterPage from './RegisterPage'
import handlers from './handlers'
import stateHandlers from './stateHandlers'
import { register } from '../../state/users/actionCreators'

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ register }, dispatch)

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  stateHandlers,
  handlers,
  setDisplayName('RegisterPage')
)

export default enhance(RegisterPage)
