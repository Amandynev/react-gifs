// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

// eslint-disable-next-line no-unused-vars, react/prefer-stateless-function
class App extends Component {
  render () {
    const gifs = [
      { id: "88iYsvbegSUn9bSTF8" },
      { id: "3oEjHI8WJv4x6UPDB6" },
      { id: "kC8N6DPOkbqWTxkNTe" },
      { id: "3NtY188QaxDdC" }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="88iYsvbegSUn9bSTF8" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
