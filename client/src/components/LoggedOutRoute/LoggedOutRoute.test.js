import LoggedOutRoute from '.';

describe('LoggedOutRoute', () => {
    let component;

    beforeEach(() => {
        component = shallow(<LoggedOutRoute />);
    })

    test('it renders', () => {
        expect(component.find('LoggedOutRoute')).toHaveLength(1)
    })
    
    test('it redirects to /habits')
    expect()
})