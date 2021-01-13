import Home from '.';

describe('Home', () => {
    let component, initState;

    beforeEach(() => {
        component = shallow(<Home />);
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

    // test('it renders to links to Login and Register Page', () => {
    //     let links = component.find('Register');
    //     expect (links).toHaveLength(1)
    // })
    
    test('it setState from showLoginBox on onClick', () => {
        initState = component.setState({
            isLoginOpen: true,
            isRegisterOpen: false
        })
        let loginbtn = form.find('#loginbtn')
        initProps = component.setProps({
            isLoginOpen: true,
            isRegisterOpen: false
        })
    })

    test('it setState from showRegisterBox on onClick', () => {
        
    })
})