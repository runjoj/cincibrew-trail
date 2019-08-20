import React from 'react';
import { Link } from 'react-router-dom'
import UserTile from '../components/UserTile'
import SearchBar from '../components/SearchBar'

class UsersContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      breweries: []
    }
  }

  componentDidMount() {
    fetch('api/v1/breweries', {
      credentials: 'same-origin',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then((responseBody) => {
      return this.setState({ breweries: responseBody })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let breweries = this.state.breweries.map(brewery => {
      return(
        <UserTile
          key={brewery.id}
          image={brewery.image}
        />
      )
    })

    return(
      <div>
        {breweries}
      </div>

    )
  }
}

export default BreweriesContainer
