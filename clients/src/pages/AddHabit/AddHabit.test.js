import AddHabit from '.';
import { shallow } from 'enzyme';
import { component } from 'react';

describe('AddHabit', () => {
    let component, form, habit;

    beforeEach(() => {
        component = shallow(<AddHabit />);
        })

        test('it exists', () => {
            expect(component.find('AddHabit').toexist())
        })

        test('it renders', () => {
            expect(component.find('div')).toHaveLength(1)
        })

        test('it renders 2 paragraphs', () => {
            const pTag = component.find('p');
            expect(pTag).toHaveLength(2)
        })

        test('it renders a paragraph with text', () => {
            expect(component.find('#p1').text()).toContain('Complete per Week:')
        })

        test('it renders a paragraph with text', () => {
            expect(component.find('#p2').text()).toContain('Complete per Day:')
        })
    
        test('it renders the title', () => {
            expect(component.find('h3').text()).toContain('Hello from AddHabit');
        })
        
        test('it renders a form', () => {
            form = component.find('form');
            expect(form).toHaveLength(1);
        })

        test('it renders a form with four inputs', () => {
                form = component.find('form');
                expect(form).toHaveLength(1);
                inputs = form.find('input')
                expect(inputs).toHaveLength(4);
            });

        test('it renders a form with a submit input', () => {
                form = component.find('form');
                expect(form).toHaveLength(1);
                inputs = form.find('input')
                expect(inputs).toHaveLength(3);
        })
    })