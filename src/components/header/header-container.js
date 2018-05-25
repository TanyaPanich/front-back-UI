import React, { Component } from 'react'
import './header-container.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth-actions.js'

class Header extends Component {
  onLogoutClick = (event) => {
    event.preventDefault()
    this.props.logout()
  }

  render() {
    return(
      <div className='header-container'>
        <a className='title' href='#title'>Stupid Todos</a>
        { this.props.username !== null && <a href='#logout' onClick={this.onLogoutClick}>{`Logout ${this.props.username}`}</a> }
      </div>
    )
  }
}


const mapStateToProps = (state) => state.auth
const mapDispatchToProps = (dispatch) => bindActionCreators({ logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Header)
