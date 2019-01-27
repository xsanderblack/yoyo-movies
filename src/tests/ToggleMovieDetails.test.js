import React from 'react';
import ReactDOM from 'react-dom';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import ToggleMovieDetails from '../ToggleMovieDetails';

it('ToggleMovieDetails renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToggleMovieDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should render ToggleMovieDetails correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<ToggleMovieDetails />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
