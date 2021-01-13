import { default as NavBar } from '.';
import { shallow } from 'enzyme';

describe('NavBar', () => {
let wrapper;

beforeEach(() => {
    wrapper = shallow(<NavBar.WrappedComponent />)
})

test('it renders', () => {
    expect(wrapper.find('nav')).toHaveLength(1);
})

// test('it exists', () => {
//     expect(wrapper.find('NavBar').toexist());
// })

test('it has 3 NavLinks', () => {
    expect(wrapper.find('NavLink')).toHaveLength(3)
})
test('it has a logout button', () => {
    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
    button.stimulate('click');
    expect
})
})
