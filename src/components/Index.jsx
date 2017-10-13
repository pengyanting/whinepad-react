import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
class Index extends Component {
  render () {
    return (
      <p>
        <Link to={`/counter`} >Counter</Link>
        <Link to={`/whinepad`} >Whinepad</Link>
      </p>
    )
  }
}

export default Index
