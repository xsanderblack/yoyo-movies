import React from 'react';
import ReactDOM from 'react-dom';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Movie from '../Movie';

it('Movie renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Movie />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should render Movie correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Movie />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
