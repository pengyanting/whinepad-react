import React, {Component, PropTypes} from 'react'
import ReactDOM, {render} from 'react-dom'
import route from './Router/Route.jsx' // 路由配置
import './libs/config'
const rootEl = document.getElementById('app')
render(
  <div>
    {route}
  </div>,
  document.body.appendChild(document.createElement('div'))
)
