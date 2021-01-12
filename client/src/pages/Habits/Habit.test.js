import Habits from  '.';

describe('Habits', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Habits />);
    })

    test('it renders', () => {
        expect(component.find('Habits')).toHaveLength(1)
    })
})