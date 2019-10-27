import React from 'react'

const UserShowTile = props => {
  let photo;
  if (props.user.profile_photo) {
    photo = props.user.profile_photo.url
  }

  return(
    <div>
      <img src={photo} alt="profile photo" height="200"/>
      <h2>{props.user.first_name} {props.user.last_name}</h2>
      <h4>Breweries you have visited:</h4>
    </div>
  )
}

export default UserShowTile
