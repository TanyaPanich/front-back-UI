import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginForm from './login/login-container.js'


//token comes from Redux store by connect function
const ProtectRoute = ({ component: Component, token }) => {
  if (token) {
    return <Route render={(props) => <Component {...props} /> } />
  }
  else {
    return <LoginForm />
  }
}

//state - is a state of Redux store --> give the value of auth property
const mapStateToProps = (state) => state.auth
export default connect(mapStateToProps)(ProtectRoute)
