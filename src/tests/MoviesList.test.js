import React from 'react';
import ReactDOM from 'react-dom';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import MoviesList from '../MoviesList';

it('MoviesList renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MoviesList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should render MoviesList correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<MoviesList />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
