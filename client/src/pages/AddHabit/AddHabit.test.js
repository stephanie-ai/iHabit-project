import AddHabit from '.';

describe('AddHabit', () => {
    let component, form;

    beforeEach(() => {
        component = shallow(<AddHabit />);
        })

        test('it renders', () => {
            expect(component.find('div')).toHaveLength(1)
            })
    
        test('it renders the title', () => {
            expect(component.find('h3').text()).toContain('Hello from AddHabit');
            });
        
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