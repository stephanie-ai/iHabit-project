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
})