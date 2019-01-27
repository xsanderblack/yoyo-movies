import React from 'react';
import ReactDOM from 'react-dom';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import ToggleFav from '../ToggleFav';

it('ToggleFav renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToggleFav />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should render ToggleFav correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<ToggleFav />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
