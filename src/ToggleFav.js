import React, { Component } from 'react';
import store from 'store';

const ToggleFav = (props) => {
  const { id } = props;
  const movie = store.get(id);
  return <ToggleFavComponent favorite={movie === undefined ? false : true} {...props} />;
};

class ToggleFavComponent extends Component {
  state = {
    favorite: this.props.favorite
  };

  onToggleFav = () => {
    const { id } = this.props;

    if (this.state.favorite) {
      store.remove(id);

      this.setState((prevState) => ({ favorite: !prevState.favorite }));
      
      const { onRemoveFromFavorits } = this.props;
      if (onRemoveFromFavorits !== undefined) onRemoveFromFavorits(id);
    } else {
      const { title, poster_path, release_date } = this.props;

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
