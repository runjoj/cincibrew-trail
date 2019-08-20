import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import BreweriesContainer from '../containers/BreweriesContainer'


const App = (props) => {
  return (
    <BrowserRouter>
      <Route exact path="/breweries" component={BreweriesContainer} />
    </BrowserRouter>
  )
}

export default App
