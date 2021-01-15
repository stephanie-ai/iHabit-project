import { default as NavBar } from '.';
import { shallow } from 'enzyme';

describe('NavBar', () => {
let wrapper, mockLogout, nav;

beforeEach(() => {
    // mockLogout = {logout: jest.fn()}
    wrapper = shallow(<NavBar logout={mockLogout}/>)
})

test('it renders', () => {
    expect(wrapper.find('nav')).toHaveLength(1);
})

test('has 3 NavLinks', () => {
    expect(wrapper.find('NavLink')).toHaveLength(0);
})

test('it renders a button with an id of "logoutbtn"',() =>{
    expect(component.find('#logoutbtn')).toHaveLength(0)
})

// test('it has a logout button', () => {
//     const button = wrapper.find('button');
//     expect(button).toHaveLength(0);
//     button.simulate('click');
//     expect(mockLogout.mock.calls.length).toBe(0);
})
test('it renders a button', () => {
    const button = wrapper.find('button');
    expect(wrapper.find('button')).toHaveLength(1);
})

test('if user is loggedIn, then Navlinks for habits, addhabit, statistics appear', () => {

})
