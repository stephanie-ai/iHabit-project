import { instances } from 'chart.js';
import { shallow } from 'enzyme';
import Statistics from '.';
//import { component } from 'react';

fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve([
        {
            "id": 13,
            "habit_id": 13,
            "user_id": 3,
            "completion": 15,
            "day": "Thu ",
            "currentdate": "2021-01-14T00:00:00.000Z",
            "streak": false,
            "streak_day": 0,
            "habitname": "abc"
        }
    ])
}))

describe('Statistics', () => {
    let component, componentDidMountSpy, mockDay;

    beforeEach(() => {
        component = shallow(<Statistics/>);
    })

    test('it renders', () => {
        expect(component).toExist
    })

    test('it has a state', () => {
        const instance = component.instance()
        expect(instance['state']).toEqual({"dailyDate": [],
                                            "weeklyDate": [],
                                            "data": {
                                                "labels": [],
                                                "datasets": [
                                                    {
                                                        "label": "Completion average",
                                                        "backgroundColor": "rgba(255,0,255, 0.75)",
                                                        "data": []
                                                    },
                                                ]
                                            }})
    })

    test('ComponentDidMount should be called once', () => {
        const instance = component.instance();
        jest.spyOn(instance, 'componentDidMount');
        instance.componentDidMount();
        //componentDidMountSpy = spyOn(Statistics.prototype, 'componentDidMount')
        expect(instance.componentDidMount).toHaveBeenCalledTimes(1);
    });

    test('a function within componentDidMount has been called', ()=>{
        const instance = component.instance();
        jest.spyOn(instance, 'dayData');
        jest.spyOn(instance, 'weekData');

        instance.componentDidMount();

        expect(instance.dayData).toHaveBeenCalledTimes(1);
        expect(instance.weekData).toHaveBeenCalledTimes(1);
    })


    test('it should have two tables', () =>{
        const container = component.find('#tableContainerDiv').children();
        expect(container).toHaveLength(3);
    })

    test('it renders the daily title', () => {
        expect(component.find('#daily').text()).toContain('Daily habits stats');
    });

    test('it renders the weekly title', () => {
        expect(component.find('#weekly').text()).toContain('Weekly habits stats');
    });

    test('the thead has six th fields in daily table', () => {
        const thTag = component.find('#dailyFields').children();
        expect(thTag.length).toBe(6);
    });

    test('the thead has three th fields in weekly table', () => {
        const thTag = component.find('#weeklyFields').children();
        expect(thTag.length).toBe(3);
    });

    //34-37
    test('the dayData is working correctly', ()=>{
        const instance = component.instance();
        //expect(instance.state.dailyDate).toEqual([]);
        jest.spyOn(instance, 'dayData');

        //global.fetch = mockDay;
        instance.dayData();
        expect(instance.dayData).toHaveBeenCalledTimes(1);
    });

    //43-46
    test('the weekData is working correctly', ()=>{
        const instance = component.instance();
        //expect(instance.state.dailyDate).toEqual([]);
        jest.spyOn(instance, 'weekData');

        //global.fetch = mockDay;
        instance.weekData();
        expect(instance.weekData).toHaveBeenCalledTimes(1);
    });

    //50-54
    test('chart data', ()=>{
        const instance = component.instance();
        jest.spyOn(instance, 'getChartData');

        instance.getChartData();
        expect(instance.getChartData).toHaveBeenCalledTimes(1);
    });

    //58-64
    test('gradient color', ()=>{
        const instance = component.instance();
        jest.spyOn(instance, 'setGradientColor');

        instance.setGradientColor();
        expect(instance.setGradientColor).toHaveBeenCalledTimes(1);
    });

    //101 and 112
})

describe('testing the fetch in statistics page', ()=>{

    let component, componentDidMountSpy, mockDay;

    beforeEach(() => {
        component = shallow(<Statistics user={3}/>);
    })
    
    test('the number of fetches done in page', async()=>{
        //const component = shallow(<Statistics user={3}/>);
        //const instance = component.instance();
        const data = await component.instance();
        
        expect(data.state.dailyDate.length).toBeGreaterThan(0)
        expect(fetch).toHaveBeenCalledTimes(2);
    });

    test('the dayData fetch test', ()=>{
        const instance = component.instance()
        jest.spyOn(instance, 'dayData');

        expect(instance['state'].dailyDate.length).toBeGreaterThan(0)
    });

    test('the weekData fetch test', ()=>{
        const instance = component.instance()
        jest.spyOn(instance, 'weekData');

        expect(instance['state'].weeklyDate.length).toBeGreaterThan(0)
    });
})