import Habits from  '.';
import { shallow } from 'enzyme';
import { component } from 'react';

describe('Habits', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Habits />);
    })

    test('it exists', () => {
        expect(component.find('Habits').exists()).toBeTruthy();
    })

    test('it renders', () => {
        expect(component.find('Habits')).toHaveLength(1)
    })

    test('it renders the title', () => {
        expect(component.find('h3').text()).toContain('Hello from habits page');
    });

    test('it has a plushabit button', () => {
        component.find('button').stimulate('click');
    })
})