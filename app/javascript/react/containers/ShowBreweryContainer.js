import React from 'react'
import ShowBreweryTile from '../components/ShowBreweryTile'
import AddBreweryButton from '../components/AddBreweryButton'

class ShowBreweryContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brewery: {},
      user_visited: false
    }
    this.addBreweryVisit=this.addBreweryVisit.bind(this)
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

  submitBrewery(formPayload) {
    debugger
    fetch(`/api/v1/users/${this.state.brewery.current_user.id}/visits`, {
      credentials: 'same-origin',
      method: "POST",
      body: JSON.stringify(formPayload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      debugger
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    window.location.reload()
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  addBreweryVisit(event) {
    event.preventDefault();
    let formPayload = {
      user_id: this.state.brewery.current_user.id,
      brewery_id: this.state.brewery.id
    }
    this.submitBrewery(formPayload)
  }

  render() {

    let addBreweryButton;
      // if (this.state.brewery.current_user != null && this.state.user_visited == false) {
        addBreweryButton =
          <AddBreweryButton
            user_visited={this.state.user_visited}
            handleclick={this.addBreweryVisit}
          />
      // }
    return(
      <div>
        <div>
          <ShowBreweryTile
            key={this.state.brewery.id}
            brewery={this.state.brewery}
          />
        </div>

        <div className="add-brewery-button">
          {addBreweryButton}
        </div>
      </div>
    )
  }
}

export default ShowBreweryContainer
