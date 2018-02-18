import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Stock from './Store'
import Store from './Orders'
  
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Stock}/>
      <Route path='/orders' component={Store}/>
      </Switch>
  </main>
)

export default Main
