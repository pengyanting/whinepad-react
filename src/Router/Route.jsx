import React, {Component, PropTypes} from 'react'
import { Router, Route, Redirect, IndexRoute, BrowserHistory, HashHistory } from 'react-router'

import Home from '../component/Home' // home页

const RouteConfig = (
  <BrowserHistory>
    <IndexRoute Component='Home' />
  </BrowserHistory>
)
