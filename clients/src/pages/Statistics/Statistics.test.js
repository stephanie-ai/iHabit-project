import Statistics from '.';
import { component } from 'react';

describe('Statistics', () => {
    let component, componentDidMountSpy;

    beforeEach(() => {
        component = shallow(<Statistics />);
    })

    test('it renders', () => {
        expect(component).toExist
    })

    test('it has a state', () => {
        const instance = component.instance()
        expect(instance['state']).toEqual({"dailyDate": "weeklyDate" })
    })

    test('ComponentDidMount should be called once', () => {
        componentDidMountSpy = spyOn(Statistics.prototype, 'componentDidMount')
        expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
    })

    test('it renders the title', () => {
        expect(component.find('h2').text()).toContain('Hello from Statistics page');
    });

    test('it renders the daily title', () => {
        expect(component.find('#daily').text()).toContain('Daily habits stats');
    });

    test('it renders the weekly title', () => {
        expect(component.find('#weekly').text()).toContain('Weekly habits stats');
    });

    test('it renders nine paragraphs', () => {
        const pTag = component.find('p');
        expect(pTag).toHaveLength(9)
    })
})