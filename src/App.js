import React, { Component } from 'react';
import FavoriteMovies from './FavoriteMovies';
import SearchPage from './SearchPage';

class App extends Component {
  state = {
    showSearchPage: true
  };

  onTogglePages = () => {
    this.setState((prevState) => ({ showSearchPage: !prevState.showSearchPage }));
  };

  render() {
    const { showSearchPage } = this.state;
    return (
      <div>
        <button onClick={this.onTogglePages}>Search</button>
        <button onClick={this.onTogglePages}>Favorites</button>
        {showSearchPage ? <SearchPage /> : <FavoriteMovies />}
      </div>
    );
  }
};

export default App;
