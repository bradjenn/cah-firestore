// import { withRouter } from 'react-router-dom'
// import { bindActionCreators, compose } from 'redux'
// import { setDisplayName, lifecycle } from 'recompose'
// import { connect } from 'react-redux'

import RoomPage from './RoomPage'

// import { fetchUser } from 'State/user/actionCreators'
// import { fetchRooms, createRoom } from 'State/rooms/actionCreators'
// import { getIsAuthenticated, getUser } from 'State/user/selectors'
// import handlers from './handlers'

// const mapStateToProps = state => ({
//   isAuthenticated: getIsAuthenticated(state),
//   user: getUser(state),
//   rooms: [],
// })
//
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ createRoom, fetchUser, fetchRooms }, dispatch)
//
// const componentWillMount = function loadAllData() {
//   const { fetchUser, fetchRooms } = this.props
//   fetchUser()
//   fetchRooms()
// }

// const enhance = compose(
//   withRouter,
//   connect(mapStateToProps, mapDispatchToProps),
//   handlers,
//   lifecycle({ componentWillMount }),
//   setDisplayName('HomePage')
// )

// export default enhance(HomePage)

export default RoomPage
