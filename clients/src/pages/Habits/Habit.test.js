import Habits from  '.';
import { shallow } from 'enzyme';
import { component } from 'react';

describe('Habits', () => {
    let component, form;

    beforeEach(() => {
        component = shallow(<Habits />);
    })

    test('it renders', () => {
        expect(component.find('#newhabit')).toHaveLength(1)
    })

    test('it renders the title', () => {
        expect(component.find('h3').text()).toContain('Hello from habits page');
    });

    test('it has a plushabit button', () => {
        component.find('button').stimulate('click');
    })
    test('it renders a form', () => {
        form = component.find('form');
        expect(form).toHaveLength(1);
    })
    test('it renders a form with 1 text input, 2 number inputs and a submit', () => {
        form = component.find('form');
        expect(form).toHaveLength(1);
        const inputs = form.find('input')
        expect(inputs).toHaveLength(4);
        expect(inputs.first().props().type).toBe('text');
        expect(inputs.second().props().type).toBe('number');
    })

    test('it renders a paragraph', () => {
        const pTag = component.find('p');
        expect(pTag).toHaveLength(1)
    })

    test('it renders the paragraph text', () => {
        expect(component.find('p').text()).toContain('All your habits:');
    });
})