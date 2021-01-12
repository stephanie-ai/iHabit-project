import Habits from  '.';

describe('Habits', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Habits />);
    })

    test('it renders', () => {
        expect(component.find('Habits')).toHaveLength(1)
    })

    test('it renders the title', () => {
        expect(component.find('h3').text()).toContain('Hello from habits page');
    });

    test('it has a plushabit button', () => {
        const button = component.find('button');
        expect(button).toHaveLength(1);
        button.stimulate('click');
        expect
    })
})