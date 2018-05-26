import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { listTodos } from '../../actions/todo-actions'

class TodoIndex extends Component {
  componentDidMount() {
    this.props.listTodos({ token: this.props.auth.token })
  }

  render() {
    const todoKeys = Object.keys(this.props.todos)
    if (todoKeys.length === 0) {
      return <h3>No todos</h3>
    }
    else {
      return (
        <div>
          <h1>Todos</h1>
          <p>...do not knock out your to do list, call it stupid!</p>
          { todoKeys.map((id) => <p key={id}>{ this.props.todos[id].item }</p>) }
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({ auth: state.auth, todos: state.todos })
const mapDispatchToProps = (dispatch) => bindActionCreators({ listTodos }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoIndex)
