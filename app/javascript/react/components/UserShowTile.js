import React from 'react'

const UserShowTile = props => {
  let photo;
  if (props.user.profile_photo) {
    photo = props.user.profile_photo.url
  }

  return(
    <div>
      <img src={photo} alt="profile photo" height="200"/>
      <h1>{props.user.first_name} {props.user.last_name}</h1>
    </div>
  )
}

export default UserShowTile
