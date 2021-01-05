import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component {
  handleUpdate = (event) => {
    // aller fetch une API de gif et changer le state gifs
    // log the value of the component
    console.log(event.target.value);

  }

  render() {
    return (
      <input type="text" className="form-control form-search"
      onChange={this.handleUpdate}/>
      // ajouter l'event sur l'input pour afficher un gif à chaque lettre taper
    );
  }
}

export default SearchBar;
