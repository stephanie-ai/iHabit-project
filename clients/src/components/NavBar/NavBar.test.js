import NavBar from '.';
import { shallow } from 'enzyme';
import { component } from 'react';

describe('NavBar', () => {
let component;

beforeEach(() => {
    component = shallow(<NavBar />)
})

test('it renders', () => {
    expect(component.find('nav')).toHaveLength(1);
});

test('it exists', () => {
    expect(component.find('NavBar').exists()).toBeTruthy();
})

test('it has 3 NavLinks', () => {
test ('it has a Logout button', () => {
    let logoutbtn = component.find('#logoutbtn')
    logoutbtn.stimulate('click', preventDefault)
    expect(component.find())
})
})