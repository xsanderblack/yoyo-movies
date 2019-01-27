import React, { Component } from 'react';
import store from 'store';

// Component checks whenever movie is in storage for favorite movies,
// and passes this information to ToggleFavComponent.
const ToggleFav = (props) => {
  const { id } = props;
  const movie = store.get(id);
  return <ToggleFavComponent favorite={movie === undefined ? false : true} {...props} />;
};

// Component removes and adds movies to storage for favorite movies, based on data from ToggleFav component.
class ToggleFavComponent extends Component {
  // Setting up initial value. 
  state = {
    favorite: this.props.favorite
  };

  onToggleFav = () => {
    const { id } = this.props;

    if (this.state.favorite) {
      store.remove(id);

      this.setState((prevState) => ({ favorite: !prevState.favorite }));
      
      // Calls method from FavoriteMovies component to remove item from displayed list of favorite movies.
      // onRemoveFromFavorits is undefined and not needed if parent of current instance of this component
      // is SearchPage component and not FavoriteMovies.
      const { onRemoveFromFavorits } = this.props;
      if (onRemoveFromFavorits !== undefined) onRemoveFromFavorits(id);
    } else {
      const { title, poster_path, release_date } = this.props;

      // We are adding favoriteMovie identifier, to find favored movies in local storage in FavoriteMovies component.
      store.set(id, { id, title, poster_path, release_date, favoriteMovie: true });

      this.setState((prevState) => ({ favorite: !prevState.favorite }));
    }
  };

  render() {
    const { favorite } = this.state;
    return (
      <button onClick={this.onToggleFav}>
        {favorite ? 'Unfav' : 'Fav'}
      </button>
    );
  }
};

export default ToggleFav;
