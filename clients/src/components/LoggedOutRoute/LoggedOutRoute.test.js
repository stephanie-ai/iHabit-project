import LoggedOutRoute from '.';
import { shallow } from 'enzyme';
import { component } from 'react';

describe('LoggedOutRoute', () => {
    let component;

    beforeEach(() => {
        component = shallow(<LoggedOutRoute />);
    })

    test('it renders', () => {
        expect(component.find('LoggedOutRoute')).toHaveLength(1)
    })
    
    test('it exists', () => {
        expect(component.find('LoggedOutRoute').exists()).toBeTruthy();
    })

    test('it redirects to /habits link', () => {
    let links = component.find('Redirect');
    expect(links).toHaveLength(1)
})
})