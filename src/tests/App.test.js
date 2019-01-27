import React from 'react';
import ReactDOM from 'react-dom';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import App from '../App';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should render App correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<App />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
