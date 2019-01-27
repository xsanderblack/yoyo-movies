import React from 'react';
import ReactDOM from 'react-dom';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import MovieDetailsScreen from '../MovieDetailsScreen';

it('MovieDetailsScreen renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MovieDetailsScreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should render MovieDetailsScreen correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<MovieDetailsScreen />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
