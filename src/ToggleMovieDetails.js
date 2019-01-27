import React, { Component } from 'react';
import axiosWithCache from './axiosWithCache';
// import axios from 'axios';
import MovieDetailsScreen from './MovieDetailsScreen';
import {
  PATH_BASE,
  PATH_MOVIE,
  API_KEY
} from './Constants';

export default class ToggleMovieDetails extends Component {
  state = {
    movie: null,
    isLoading: false,
    error: null
  };
  
  toggleMovieDetails = () => {
    const { movie, error } = this.state;

    if (error) this.setState({ error: null });
    this.setState({ isLoading: true });

    if (movie) {
      this.setState({ movie: null, isLoading: false });
    } else {
      axiosWithCache({
        url: `${PATH_BASE}${PATH_MOVIE}${this.props.id}?api_key=${API_KEY}`,
        method: 'get'
      })
        .then(result => {
          console.log(result);
          if (result.request.fromCache) {
            console.log('from cache');
          } else {
            console.log('no cache')
          };
          this.setState({ movie: result.data, isLoading: false });
        })
        .catch(error => this.setState({ error, isLoading: false }));
      // axios(`${PATH_BASE}${PATH_MOVIE}${this.props.id}?api_key=${API_KEY}`)
      //   .then(result => {
      //       this.setState({ movie: result.data, isLoading: false });
      //   })
      //   .catch(error => this.setState({ error, isLoading: false }));
    };
  };

  render() {
    const { movie, isLoading, error } = this.state;

    return (
      <div>
        <button onClick={this.toggleMovieDetails}>
          {movie ? 'Hide Details' : 'Show Details'}
        </button>
        {movie && <MovieDetailsScreen {...movie} />}
        <div>
          {isLoading && 'Loading...'}
          {error && 'An error occured. Please, try again later.'}
        </div>
      </div>
    );
  };
};
