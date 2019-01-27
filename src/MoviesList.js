import React from 'react';
import Movie from './Movie';

const MoviesList = (props) => {
  const { movies, onRemoveFromFavorits } = props;
  return (
    <div>
      {movies &&
        movies.map(movie => 
          <Movie
            key={movie.id}
            {...movie}
            onRemoveFromFavorits={onRemoveFromFavorits}
          />
        )
      }
    </div>
  );
};

export default MoviesList;
