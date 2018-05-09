export const getIsAuthenticated = state => state.user.isAuthenticated

export const getUser = state => {
  return state.user.profile
}

export default {
  getIsAuthenticated,
  getUser,
}
