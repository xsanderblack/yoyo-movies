import React from 'react';
import MoviePoster from './MoviePoster';
import ToggleMovieDetails from './ToggleMovieDetails';
import ToggleFav from './ToggleFav';

// Component renders movie information from props,
// and passes necessary data to ToggleFav and ToggleMovieDetails components.
const Movie = (props) => {
  const { id, title, poster_path, release_date } = props;
  return (
    <div>
      <MoviePoster size='thumbnail' path={poster_path} alt={title} />
      {title} - {release_date} - <ToggleFav {...props} />
      <ToggleMovieDetails id={id} />
    </div>
  );
};

export default Movie;
