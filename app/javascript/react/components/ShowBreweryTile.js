import React from 'react'

const ShowBreweryTile = props => {

  return(
    <div>
      <div>
        <img src={props.logo.url} alt="brewery logo" width="200" height="200"/>
        <h6>{props.name}</h6>
        <h6>{props.address} {props.city}, {props.state}</h6>
        <h6>{props.phone}</h6>
        <h6>{props.website}</h6>
      </div>
    </div>
  )
}

export default ShowBreweryTile
