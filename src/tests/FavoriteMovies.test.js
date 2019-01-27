import React from 'react';
import ReactDOM from 'react-dom';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import FavoriteMovies from '../FavoriteMovies';

it('FavoriteMovies renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FavoriteMovies />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should render FavoriteMovies correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<FavoriteMovies />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
