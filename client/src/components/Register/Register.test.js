import Register from '.';

describe('Register', () => {
    let component, form;
    let fakeEvent = { preventDefault: () => 'fake', target: {name: 'username', value: 1}}
    let preventDefault = { preventDefault: () => 'fake' }

    beforeEach(() => {
        component = shallow(<Register />)
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
    test('it renders the title', () => {
        expect(component.find('h2').text()).toContain('Create an Account');
    });

    test('it should create an account', () => {
       form = component.find ('form')
       form.stimulate ('submit', fakeEvent)
       expect(component.state)
    });
    
