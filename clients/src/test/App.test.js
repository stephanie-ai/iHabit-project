import App from '../App';
import { shallow } from 'enzyme';
import { component } from 'react';

describe('App', () => {
    let component;

    beforeEach(() => {
        component = shallow(<App.WrappedComponent history={{push: (p)=>{}}}/>)
    });

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

});