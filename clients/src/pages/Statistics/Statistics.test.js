import Statistics from '.';
import { component } from 'react';

describe('Statistics', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Statistics />);
    })

    test('it renders', () => {
        expect(component).toExist
    })

    test('it renders the title', () => {
        expect(component.find('h2').text()).toContain('Hello from Statistics page');
    });
})