import Register from '.';
import { shallow } from 'enzyme';
import { component } from 'react';

describe('Register', () => {
    let component, form;

    beforeEach(() => {
        registerMock = jest.fn()
        component = shallow(<Register register={registerMock} />)
    })

    test('it renders', () => {
        expect(component.find('div')).toHaveLength(1)
    })

    test('it has a state', () => {
        const instance = component.instance()
        expect(instance['state']).toEqual({"username": "", "password": "", "passwordConfirmation": ""})
    })

    test('it renders a form', () => {
        form = component.find('form');
        expect(form).toHaveLength(1);
    })

    test('it renders the title', () => {
        expect(component.find('h2').text()).toContain('Create an Account');
    });
    
    test('it renders a form with three text inputs and a submit', () => {
        form = component.find('form');
        expect(form).toHaveLength(1);
        const inputs = form.find('input')
        expect(inputs).toHaveLength(4);
        expect(inputs.first().props().type).toBe('text');
    })
   
    test('it calls on register prop on form submission', () => {
        form = component.find('form');
        component.setState({username: "bob",password: "enter", passwordConfirmation: "enter"});
        form.stimulate('submit', {preventDefault: jest.FocusNavigationEvent() });
        expect(registerMock).toHaveBeenNthCalledWith(1, 'bob', 'enter', 'enter');
    })
})