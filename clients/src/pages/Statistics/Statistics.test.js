import Statistics from '.';
//import { component } from 'react';

describe('Statistics', () => {
    let component, componentDidMountSpy, mockDay;
    
    global.fetch = jest.fn(
        Promise.resolve({
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
        })
    );

    beforeEach(() => {
        component = shallow(<Statistics />);
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
    test('the dayData is working correctly', async()=>{
        const instance = component.instance();
        expect(instance.state.dailyDate).toEqual([]);

        global.fetch = mockDay;
        const dayData = await instance.dayData();
        expect(instance.state.dailyDate.length).toBeGreaterThan(0);
    });

    //43-46

    //50-54

    //58-64

    //101 and 112
})