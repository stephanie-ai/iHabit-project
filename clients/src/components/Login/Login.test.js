import Login from '.';
import { shallow } from 'enzyme';
import { component } from 'react';

describe('Login', () => {
    let component, form;
    let fakeEvent = { preventDefault: () => 'fake', target: {name: 'username', value: "login"}}
    let preventDefault = { preventDefault: () => 'fake' }

    beforeEach(() => {
        component = shallow(<Login />)
    })

    test('it renders', () => {
        expect(component.find('div')).toHaveLength(1)
    })

    test('it has a state', () => {
        const instance = component.instance()
        expect(instance['state']).toEqual({"username": "", "password": ""})
    })

    test('it renders the title', () => {
        expect(component.find('h2').text()).toContain('Login');
    });
})