import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Stock from './Stock'
import Orders from './Orders'
 
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Stock}/>
      <Route path='/orders' component={Orders}/>
     </Switch>
  </main>
)

export default Main
