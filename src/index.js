import React, {Component, PropTypes} from 'react'
import ReactDOM, {render} from 'react-dom'
import route from './Router/Route.jsx' // 路由配置
import './libs/config'
import {Provider} from 'react-redux'
import store from './Redux/store/store'

const rootEl = document.getElementById('app')

store.subscribe(() => { // 监听state变化
  // console.log(store.getState())
})
render(
  <Provider store={store}>
    {route}
  </Provider>,
  document.body.appendChild(document.createElement('div'))
)
