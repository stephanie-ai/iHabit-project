import App from '../App.js';
import { shallow } from 'enzyme';

fetch = jest.fn(() =>Promise.resolve({
    json: () => Promise.resolve({
        userId: 5,
        userName: "MrAwesome"
    })
}))

describe('App', () => {
    let wrapper, component;
    let stateStub = {
        isLoggedIn: false,
        currentUser: {}
    }

    beforeEach(() => {
        component = shallow(<App.WrappedComponent history={{push: (p)=>{}}} 
        state = {{isLoggedIn: false,
        currentUser: {}}} />)
    });

    test('it exists', () => {
        expect(wrapper).toExist
    })

    test('it renders', () => {
        expect(component.find('main')).toHaveLength(1)
    });

    test('number of switch', () => {
        let routerSwitch = component.find('Switch')
        expect(routerSwitch.length).toBe(1)
        expect(routerSwitch.children().length).toBe(5);
    });

    test('number of routers', () => {
        let router = component.find('Route')
        let logRouter = component.find('LoggedOutRoute')
        let privRouter = component.find('PrivateRoute')

        expect(router.length).toBe(1)
        expect(logRouter.length).toBe(2)
        expect(privRouter.length).toBe(2)
    });

    test('path of the routes', ()=>{
        let rswitch = component.find('Switch');
        let router = component.find('Route');
        let firstLogRouter = component.find('LoggedOutRoute').first();
        let secondLogRouter = component.find('LoggedOutRoute').last();
        let firstPrivRouter = component.find('PrivateRoute').first();
        let secondPrivRouter = component.find('PrivateRoute').last();

        expect(rswitch.prop('id')).toEqual('navPaths');
        expect(router.prop('path')).toEqual('/');
        expect(firstLogRouter.prop('path')).toEqual('/login');
        expect(secondLogRouter.prop('path')).toEqual('/register');
        expect(firstPrivRouter.prop('path')).toEqual('/habits');
        expect(secondPrivRouter.prop('path')).toEqual('/statistics');
    })

    test('check logout', ()=>{
        let instance = component.instance();
        instance.setState({ isLoggedIn: true });
        expect(instance.state.isLoggedIn).toBe(true);

        instance.logout();

        expect(instance.state.isLoggedIn).toBe(false);
    })

<<<<<<< HEAD
});

describe('App', () => {
    let component;

    beforeEach(() => {
        component = shallow(<App.WrappedComponent history={{push: (p)=>{}}}/>)
    });

    test('fetch login works', async()=>{
        const instance = component.instance();
        jest.spyOn(instance, 'login');
        await instance.login({username: "MrAwesome", password: "welcome"});

        expect(instance['state'].currentUser.userName).toEqual('MrAwesome');
    })

})
=======
    test('it renders links to Logged Out Route Page', () => {
        let links = component.find('LoggedOutRoute');
        expect(links).toHaveLength(2)
        })
    
    test('it renders links to PrivateRoute Page', () => {
        let links = component.find('PrivateRoute');
        expect(links).toHaveLength(2)
        })
    test('it renders', () => {
        expect(component.find('Route')).toHaveLength(1)
        })

});
>>>>>>> 8815926f081edc74b6b5dd06fd1e862a6d1e5918
