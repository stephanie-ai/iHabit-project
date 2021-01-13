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