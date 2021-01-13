import Home from '.';

describe('Home', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Home />);
        })

    test('it renders', () => {
        expect(component.find('div')).toHaveLength(1)
        })

    test('it exists', () => {
        expect(component.find('Home').exists()).toBeTruthy();
        })

    test('it renders the title', () => {
        expect(component.find('h1').text()).toContain('Welcome to iHabit');
        });

    test('it renders a sub-paragraph', () => {
        expect(component.find('p').text()).toContain('Keep track of your habits here on a daily or weekly basis.');
    })
   
})