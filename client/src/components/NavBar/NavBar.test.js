import NavBar from '.';

describe('NavBar', () => {
let component;

beforeEach(() => {
    component = shallow(<Register />)
})

test('it renders', () => {
    expect(component.find('nav')).toHaveLength(1);
});

test('it has 3 NavLinks', () => {
    expect(component.find('NavLink')).toHaveLength(3);
});

test ('it has a Logout button', () => {
    const button = component.find('button');
    expect(button).toHaveLength(1);
    button.stimulate('click');
    expect
})
})