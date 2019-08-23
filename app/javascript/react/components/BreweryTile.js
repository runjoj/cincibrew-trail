import React from 'react'
import { Link } from 'react-router-dom'

const BreweryTile = props => {
  let location

  return(
      <div>
        <div className="brewery-logo">
          <img src={props.logo.url} alt="brewery logo"/>
          <div className="brewery-name">
            <p>{props.name}</p>
          </div>
        </div>
      </div>
  )
}

export default BreweryTile
