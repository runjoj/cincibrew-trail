import React from 'react'
import UserShowTile from '../components/UserShowTile'

class UserShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        profile_photo: {}
      }
    }
  }

  componentDidMount(){
    let userId = this.props.match.params.id
    fetch(`/api/v1/users/${userId}`)
    .then(response => {
      if(response.ok) {
        return response
      } else {
        let erorMessage = 'Something went wrong'
        let error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(userObject => {
      this.setState( {user: userObject.user } )
    })
    .catch(error => console.error(error.message))
  }

  render() {

    return(
      <div>
        <UserShowTile
          user={this.state.user}
        />
      </div>
    )
  }
}

export default UserShowContainer
