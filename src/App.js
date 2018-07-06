import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import RoomPage from './pages/RoomPage'

import { store } from './state'

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/:roomID" component={RoomPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  </Provider>
)

App.displayName = 'App'

export default App
