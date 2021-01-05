// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

// eslint-disable-next-line no-unused-vars, react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // liste des gifs
      gifs: [],
      //  le gif qui est en zoom à gauche
      selectedGifId: "88iYsvbegSUn9bSTF8"
    };

    this.search("unicorn");
  }

  search = (query) => {
    // on va appeler une api de GIF
    giphy('3xBIkOP8X616bcGG1K65iNYZjzNQ8otm').search({
      q: query,
      rating: 'g',
      limit: '9'
    }, (error, result) => {
      //  update the gig state with the info of the API
      this.setState({
        gifs: result.data
      });
    });
  }

  render () {
    // const gifs = [
    //   { id: "88iYsvbegSUn9bSTF8" },
    //   { id: "3oEjHI8WJv4x6UPDB6" },
    //   { id: "kC8N6DPOkbqWTxkNTe" },
    //   { id: "3NtY188QaxDdC" }
    // ];

 // l'app va definir sa fonctionsearch bar dans le constructor et ensuite va la passer à son enfant la props search bar qui est une fonction.
 //  eci dessous ce sont les enfant de l'app
    return (
      <div>
        <div className="left-scene">
          <SearchBar functionSearch={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
