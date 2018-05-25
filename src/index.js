import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/root-reducer'
import Header from './components/header/header-container'
import TodoIndex from './components/todo/todo-index-container'
import ProtectRoute from './components/protect-route'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render((
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <ProtectRoute path='/' component={TodoIndex} />
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))
registerServiceWorker()
