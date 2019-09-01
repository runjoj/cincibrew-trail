import React from 'react'

const UserShowTile = props => {

  return(
    <div>
      <img src={props.user.profile_photo.url} />
      <h1>{props.user.first_name} {props.user.last_name}</h1>
    </div>
  )
}

export default UserShowTile
