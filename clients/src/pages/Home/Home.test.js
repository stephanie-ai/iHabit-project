import Home from '.';
describe('Home', () => {
    let component, initState, newState, initProps;
    let stateStub = {
        isLoginOpen: true,
        isRegisterOpen: false
    }
    beforeEach(() => {
        component = shallow(<Home state = {{ isLoginOpen: true,
            isRegisterOpen: false}} />);
        })
    test('it renders', () => {
        expect(component.find('div')).toHaveLength(8)
        })
    test('it renders the title', () => {
        expect(component.find('h1').text()).toContain('Welcome to iHabit');
        });
    test('it renders a sub-paragraph', () => {
        expect(component.find('p').text()).toContain('Keep track of your habits here on a daily or weekly basis.');
    })
    test('it has 2 buttons', () => {
        expect(component.find('button')).toHaveLength(2)
    })
    test('it renders to links to Login and Register Page', () => {
        let links = component.find('Login');
        expect (links).toHaveLength(1)
    })
    test('it setState from showRegisterBox onClick', () => {
        let registerbtn = component.find('#registerbtn')
        initProps = component.setProps({
            isRegisterOpen: true, 
            isLoginOpen: false
        })
        component.find('#registerbtn').simulate('click')
        newState = registerbtn.simulate('click')
        expect(newState).not.toEqual(stateStub)
    })
});