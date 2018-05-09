import { withRouter } from 'react-router-dom'
import { bindActionCreators, compose } from 'redux'
import { setDisplayName, lifecycle } from 'recompose'
import { connect } from 'react-redux'

import HomePage from './HomePage'
import { fetchUser } from '../../state/user/actionCreators'
import { getIsAuthenticated, getUser } from '../../state/user/selectors'

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
  user: getUser(state),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchUser }, dispatch)

const componentWillMount = function loadAllData() {
  const { fetchUser } = this.props
  fetchUser()
}

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({ componentWillMount }),
  setDisplayName('HomePage')
)

export default enhance(HomePage)
