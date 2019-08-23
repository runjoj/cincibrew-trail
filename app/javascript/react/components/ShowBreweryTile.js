import React from 'react'

const ShowBreweryTile = props => {

  let logo;
  if (props.brewery.logo) {
    logo = props.brewery.logo.url
  }

  return(
    <div>
      <div>
        <img src={logo} alt="brewery logo" width="200" height="200"/>
        <h6>{props.brewery.name}</h6>
        <h6>{props.brewery.address} {props.brewery.city}, {props.brewery.state}</h6>
        <h6>{props.brewery.phone}</h6>
        <h6>{props.brewery.website}</h6>
      </div>
    </div>
  )
}

export default ShowBreweryTile
