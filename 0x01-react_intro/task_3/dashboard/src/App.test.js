import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
	it('Test App if crushes', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBe(true);
	})

	it('Test App renders a <div> with class "App-header"', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('.App-header').length).toBe(1);
	})

	it('Test App renders a <div> with class "App-body"', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('.App-body').length).toBe(1);
	})

	it('Tests App renders a <div> with class "App-footer"', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('.App-footer').length).toBe(1);
	})
});