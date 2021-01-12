import App from '../App';
import { shallow } from 'enzyme';

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />)
    });

    test('it renders', () => {
        expect(wrapper.find('#app')).toHaveLength(1);
    });

});