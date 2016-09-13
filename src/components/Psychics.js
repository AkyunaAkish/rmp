import React, { Component } from 'react'
import { connect } from 'react-redux'

class Psychics extends Component {
  render() {
    return (
      <div id='psychicsDiv'>
        <h1>This is where the psychics will go</h1>
      </div>
    )
  }
}

export default connect()(Psychics)
