import React from 'react'
import ShowBreweryTile from '../components/ShowBreweryTile'

class ShowBreweryContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brewery: {}
    }
  }

  componentDidMount(){
    fetch(`/api/v1/breweries/${this.props.match.params.id}`, { credentials: 'same-origin' })
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
      return this.setState({ brewery: responseBody })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div>
        <ShowBreweryTile
          key={this.state.brewery.id}
          brewery={this.state.brewery}
        />
      </div>
    )
  }
}

export default ShowBreweryContainer
