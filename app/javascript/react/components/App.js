import React from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import BreweriesContainer from '../containers/BreweriesContainer'
import ShowBreweryContainer from '../containers/ShowBreweryContainer'
import UserShowContainer from '../containers/UserShowContainer'

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/breweries" component={BreweriesContainer} />
        <Route exact path="/breweries/:id" component={ShowBreweryContainer} />
        <Route exact path="/users/:id" component={UserShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
