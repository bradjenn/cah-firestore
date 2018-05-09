import { withRouter } from 'react-router-dom'
import { bindActionCreators, compose } from 'redux'
import { setDisplayName } from 'recompose'
import { connect } from 'react-redux'

import LoginPage from './LoginPage'
import handlers from './handlers'
import stateHandlers from './stateHandlers'
import { login } from '../../state/user/actionCreators'

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  stateHandlers,
  handlers,
  setDisplayName('LoginPage')
)

export default enhance(LoginPage)
