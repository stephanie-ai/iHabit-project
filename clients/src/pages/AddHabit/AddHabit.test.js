import AddHabit from '.';
import { shallow } from 'enzyme';

describe('AddHabit', () => {
    let wrapper, form, habit;

    beforeEach(() => {
        wrapper = shallow(<AddHabit />);
        })

        test('it exists', () => {
            const AddHabit = wrapper.find('AddHabit')
            expect(wrapper.find('AddHabit').exists()).toBeTruthy()
        })
        test('it renders', () => {
            expect(wrapper.find('div')).toHaveLength(1)
        })

        test('it renders 2 paragraphs', () => {
            const pTag = wrapper.find('p');
            expect(pTag).toHaveLength(2)
        })

        test('it renders a paragraph with text', () => {
            expect(wrapper.find('#p1').text()).toContain('Complete per Week:')
        })

        test('it renders a paragraph with text', () => {
            expect(wrapper.find('#p2').text()).toContain('Complete per Day:')
        })
    
        test('it renders the title', () => {
            expect(wrapper.find('h3').text()).toContain('Hello from AddHabit');
        })
        
        test('it renders a form', () => {
            form = wrapper.find('form');
            expect(form).toHaveLength(1);
        })

        test('it renders a form with three text inputs and a submit', () => {
                form = wrapper.find('form');
                expect(form).toHaveLength(1);
                const inputs = form.find('input')
                expect(inputs).toHaveLength(4);
                expect(inputs.first().props().type).toBe('text');
            });
    })