import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import Layout from './components/Layout'
import About from './components/About'
import Psychics from './components/Psychics'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={About} />
    <Route path='psychics' component={Psychics} />
    <Redirect from="*" to="/" />
  </Route>
)
