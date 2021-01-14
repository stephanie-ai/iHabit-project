import App from '../App.js';
import { shallow } from 'enzyme';


describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App.WrappedComponent />)
    });

    test('it exists', () => {
        expect(wrapper).toExist
    })

    test('it renders', () => {
        expect(wrapper.find('main')).toHaveLength(1);
    });

});