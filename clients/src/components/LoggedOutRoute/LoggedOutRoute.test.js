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
    
    test('it redirects to /habits link', () => {
    let Redirect = component.find('Redirect');
    expect(redirect).toHaveLength(1)
})
})