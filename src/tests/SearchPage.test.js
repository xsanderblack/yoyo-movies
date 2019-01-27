import React from 'react';
import ReactDOM from 'react-dom';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import SearchPage from '../SearchPage';

it('SearchPage renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should render SearchPage correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<SearchPage />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
