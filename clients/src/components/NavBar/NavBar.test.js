import { default as NavBar } from '.';
import { shallow } from 'enzyme';

describe('NavBar', () => {
let wrapper, mockLogout, nav;

beforeEach(() => {
    mockLogout = {logout: jest.fn()}
    wrapper = shallow(<NavBar.WrappedComponent logout={mockLogout}/>)
})

test('it renders', () => {
    expect(wrapper.find('nav')).toHaveLength(1);
})

test('has 3 NavLinks', () => {
    expect(wrapper.find('NavLink')).toHaveLength(3);
})

test('it has a logout button', () => {
    const button = wrapper.find('button');
    expect(button).toHaveLength(0);
    button.stimulate('click');
    expect(mockLogout.mock.calls.length).toBe(0);
})
})
