import PrivateRoute from '.';
import { shallow } from 'enzyme';
import { component } from 'react';

describe('PrivateRoute', () => {
    let component;
    
    beforeEach(() => {
        component = shallow(<PrivateRoute />)
    })

    test('it renders', () => {
        expect(component.find('Route')).toHaveLength(1)
    })
    test('it passes rest to Route component', () => {
        const { component } = setup({path: '/scarif'})
        expect(component.find(Route).prop('path')).toBe('/scarif');
    })

    test('private path renders a component when authentication is true', () => {

    })
    test('it redirects unauthenticated users to login', () => {
        
    })

})