import React from 'react';
import MoviePoster from './MoviePoster';

const MovieDetailsScreen = ({
  release_date,
  production_countries,
  runtime,
  vote_average,
  overview,
  homepage,
  poster_path,
  title
}) => (
  <div>
    <MoviePoster size='full' path={poster_path} alt={title} />
    <ul>
      <li>Release date: {release_date}</li>
      <li>Countries: {production_countries.length > 0 &&
        production_countries.map((country) => (
          <p key={country.iso_3166_1}>{country.name}</p>
        )
      )}</li>
      <li>Run time: {runtime}</li>
      <li>Rating: {vote_average}</li>
      <li>Home page: {homepage}</li>
    </ul>
    <p>{overview}</p>
  </div>
);

export default MovieDetailsScreen;
