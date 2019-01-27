import React, { Component } from 'react';
import store from 'store';
import MoviesList from './MoviesList';

export default class FavoriteMovies extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    const movies = [];

    store.each((value) => {
      if (value.favoriteMovie) movies.push(value);
    })

    this.setState({ movies });
  }

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
