import React, { Component } from 'react';
import posterThumbnailSize from './poster-thumbnail-size.jpg';
import posterFullSize from './poster-full-size.jpg';
import {
  POSTER_PATH_BASE,
  POSTER_THUMBNAIL_SIZE,
  POSTER_FULL_SIZE
} from './Constants';

export default class MoviePoster extends Component {
  addDefaultImage = (e) => {
    const { size } = this.props;

    if (size === 'thumbnail') {
      e.target.src = posterThumbnailSize;
    } else if (size === 'full') {
      e.target.src = posterFullSize;
    }
  };

  render() {
    const { size, path, title } = this.props;
    let posterSize;

    if (size === 'thumbnail') {
      posterSize = POSTER_THUMBNAIL_SIZE;
    } else if (size === 'full') {
      posterSize = POSTER_FULL_SIZE;
    }

    return (
      <img
        src={`${POSTER_PATH_BASE}${posterSize}${path}`}
        alt={title}
        onError={this.addDefaultImage}
      />
    );
  };
};
