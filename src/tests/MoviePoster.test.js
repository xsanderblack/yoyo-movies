import React from 'react';
import ReactDOM from 'react-dom';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import MoviePoster from '../MoviePoster';

it('MoviePoster renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MoviePoster />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should render MoviePoster correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<MoviePoster />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
