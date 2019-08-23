import React from 'react'
import { Link } from 'react-router-dom'

const BreweryTile = props => {
  let location

  return(
      <div>
        <Link to={`/breweries/${props.id}`}>
          <div className="brewery-logo">
            <img src={props.logo.url} alt="brewery logo" width="200" height="200"/>
            <div className="brewery-name">
              <p>{props.name}</p>
            </div>
          </div>
        </Link>
      </div>
  )
}

export default BreweryTile
