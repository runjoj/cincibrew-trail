import React from 'react'
import { Link } from 'react-router-dom'

const BreweryTile = props => {

  return(
      <div className="brewery-tile col-lg-3">
        <div className="brewery-tile-contents">
          <Link to={`/breweries/${props.id}`}>
            <div className="brewery-logo">
              <img src={props.logo.url} alt="brewery logo" width="200" height="200"/>
              <div className="brewery-name">
                <p>{props.name}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
  )
}

export default BreweryTile
