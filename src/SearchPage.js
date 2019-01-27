import React, { Component } from 'react';
import axiosWithCache from './axiosWithCache';
import SearchInput from './SearchInput';
import MoviesList from './MoviesList';
import {
  PATH_BASE,
  PATH_SEARCH,
  API_KEY
} from './Constants';

// Component handles loading of data.
// It takes search term from SearchInput component and passes result to MoviesList component.
export default class SearchPage extends Component {
  state = {
    searchTerm: '',
    movies: [],
    page: 1,
    isLoading: false,
    noMatches: false,
    error: null
  };

  onSearchChange = (searchTerm) => {
    this.setState({ searchTerm });
  };

  // Method handles search submit and nullifies previous state on resubmiting search.
  onSearchSubmit = () => {
    const { movies, searchTerm, noMatches, error } = this.state;

    if (movies.length > 0) this.setState({ movies: [] });
    if (error) this.setState({ error: null });
    if (noMatches) this.setState({ noMatches: false });
    this.setState({ isLoading: true });

    axiosWithCache({
      url: `${PATH_BASE}${PATH_SEARCH}?api_key=${API_KEY}&query=${searchTerm}`,
      method: 'get'
    })
      .then(result => {
        if (result.data.results.length === 0) this.setState({ noMatches: true });
        this.setState({ movies: result.data.results, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  // Method loads more search result for pagination.
  onLoadMore = () => {
    const { movies, searchTerm, page, error } = this.state;
    
    if (error) this.setState({ error: null });
    this.setState({ isLoading: true });

    axiosWithCache({
      url: `${PATH_BASE}${PATH_SEARCH}?api_key=${API_KEY}&query=${searchTerm}&page=${page + 1}`,
      method: 'get'
    })
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
    const { searchTerm, movies, isLoading, noMatches, error } = this.state;
    return (
      <div>
        <SearchInput
          searchTerm={searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
        />
        {movies.length > 0 &&
          <div>
            <MoviesList movies={movies} />
            { !isLoading && <button onClick={this.onLoadMore}>Load more</button>}
          </div>
        }
        {isLoading && 'Loading...'}
        {error && 'An error occured. Please, try again later.'}
        {noMatches && 'No matches found.'}
      </div>
    );
  }
};
