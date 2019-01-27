import React, { Component } from 'react';
import FavoriteMovies from './FavoriteMovies';
import SearchPage from './SearchPage';
import './App.css';

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
        <button onClick={this.onTogglePages}>Favorits</button>
        {showSearchPage ? <SearchPage /> : <FavoriteMovies />}
      </div>
    );
  }
};

export default App;
