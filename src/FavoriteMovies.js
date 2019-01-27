import React, { Component } from 'react';
import store from 'store';
import MoviesList from './MoviesList';

// Component displays list of favorite movies from local storage.
export default class FavoriteMovies extends Component {
  state = {
    movies: []
  };

  // Method gets favorite movies from local storage and calls setFavoriteMovies method to populate state. 
  componentDidMount() {
    const movies = [];

    // We are finding favorite movies with help of favoriteMovie identifier,
    // wich we added in ToggleFav component.
    store.each((value) => {
      if (value.favoriteMovie) movies.push(value);
    })

    this.setFavoriteMovies(movies);
  }

  setFavoriteMovies = (movies) => {
    this.setState({ movies });
  };

  // Method will be called in ToggleFav component to remove movie from state after unfavorite action.
  onRemoveFromFavorits = (id) => {
    const { movies } = this.state;
    let indexToRemove;

    movies.forEach((movie, index) => {
      if (movie.id === id) indexToRemove = index;
    });
    movies.splice(indexToRemove, 1);

    this.setState({ movies });
  };

  render() {
    const { movies } = this.state;
    return (
      <MoviesList movies={movies} onRemoveFromFavorits={this.onRemoveFromFavorits} />
    );
  }
};
