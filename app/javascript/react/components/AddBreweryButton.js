import React, { Component } from 'react'

const AddBreweryButton = (props) => {

  return(
    <div>
      <button onClick={props.handleclick}>
        Add Brewery to profile
      </button>
    </div>
  )
}

export default AddBreweryButton
