import React, { Component } from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import MoviesList from './MoviesList';
import {
  PATH_BASE,
  PATH_SEARCH,
  API_KEY
} from './Constants';

export default class SearchPage extends Component {
  state = {
    searchTerm: '',
    movies: [],
    page: 1,
    isLoading: false,
    error: null
  };

  onSearchChange = (searchTerm) => {
    this.setState({ searchTerm });
  };

  onSearchSubmit = () => {
    const { movies, searchTerm, error } = this.state;

    if (movies.length > 0) this.setState({ movies: [] });
    if (error) this.setState({ error: null });
    this.setState({ isLoading: true });

    axios(`${PATH_BASE}${PATH_SEARCH}?api_key=${API_KEY}&query=${searchTerm}`)
      .then(result => {
          this.setState({ movies: result.data.results, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  onLoadMore = () => {
    const { movies, searchTerm, page, error } = this.state;
    
    if (error) this.setState({ error: null });
    this.setState({ isLoading: true });

    axios(`${PATH_BASE}${PATH_SEARCH}?api_key=${API_KEY}&query=${searchTerm}&page=${page + 1}`)
      .then(result => {
          this.setState({
            movies: [ ...movies, ...result.data.results ],
            page: page + 1,
            isLoading: false
          });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    const { searchTerm, movies, isLoading, error } = this.state;
    return (
      <div>
        <SearchInput
          searchTerm={searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
        />
        {movies.length > 0 &&
          <div>
            <MoviesList
              movies={movies}
            />
            { !isLoading && <button onClick={this.onLoadMore}>Load more</button>}
          </div>
        }
        {isLoading && 'Loading...'}
        {error && 'An error occured. Please, try again later.'}
      </div>
    );
  }
};
