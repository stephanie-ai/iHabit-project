import App from '../App';
import { shallow } from 'enzyme';
import { component } from 'react';

describe('App', () => {
    let component;

    beforeEach(() => {
        component = shallow(<App.WrappedComponent />)
    });

    test('it renders', () => {
        expect(component.find('#app')).toHaveLength(1);
    });

    

});