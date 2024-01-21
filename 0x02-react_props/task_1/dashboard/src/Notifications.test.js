import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';


describe('<Notifications />', () => {
    if('test Notifications renders without crush', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });

    if('test Notifications renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li').length).toBe(3);
    });

    if('test Norification renders text', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('p').text()).toBe('Here is tthe list of notifications');
    });
});
