import React from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import BreweriesContainer from '../containers/BreweriesContainer'

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/breweries" component={BreweriesContainer} />
        <Route exact path="/breweries/:id" component={ShowBreweryContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
