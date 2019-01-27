import React from 'react';
import ReactDOM from 'react-dom';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import SearchInput from '../SearchInput';

it('SearchInput renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchInput searchTerm='test' />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should render SearchInput correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<SearchInput searchTerm='test' />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
