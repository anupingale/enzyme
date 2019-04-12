import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
});

test('should contain two boxes', () => {
  const wrapper = shallow(<App />);
  const box = wrapper.find("[data-test='display-box']");
  expect(box.length).toBe(2);
});

test('should render display count ', () => {
  const wrapper = shallow(<App />);
  const displayCount = wrapper.find("[data-test='display-count']");
  expect(displayCount.length).toBe(1);
});

test('should have initial count of 0', () => {
  const wrapper = shallow(<App />);
  const displayCount = wrapper.find("[data-test='display-count']");

  // expect(displayCount.text()).toContain(0);
  expect(wrapper.state().count).toBe(0);
});

test('should render increment button', () => {
  const wrapper = shallow(<App />);
  const incrementButton = wrapper.find("[data-test='display-button']");
  expect(incrementButton.length).toBe(1);
});

test('should update count on clicking increment button', () => {
  const count = 7;
  const wrapper = shallow(<App />);
  wrapper.setState({count})
  const incrementButton = wrapper.find("[data-test='display-button']");
  incrementButton.simulate('click');
  // wrapper.update();

  expect(wrapper.state().count).toBe(8);
});
