import Habits from  '.';
import { shallow } from 'enzyme';
import { component } from 'react';
import { instances } from 'chart.js';

fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve([{
        "id": 8,
        "habit": "gaming",
        "weekly_track": 3,
        "daily_track": 1,
        "user_id": 4
    }])
}));

describe('Habits', () => {
    let component, form, instance;
    let stubHabits = [
        // { "id": 1, "habitname": "swimming", "" }
        { "habit": "cycling", "user": 2, "weeklyNum": 3, "dailyNum": 1  }
    ]

    beforeEach(() => {
        component = shallow(<Habits />);
    })

    test('it renders', () => { // working
        expect(component.find('#habits')).toHaveLength(1);
    })

    test('it renders the title', () => { // working
        expect(component.find('h3').text()).toContain('Habits you are working on');
    });

    test('it has a plushabit button', () => { // working
        let btn = component.find('#plushabit');
        btn.simulate('click');
        // component.find('button').stimulate('click');
    })

    // test('createHabit does things', () => {
    //     let fakeSubmitEvent = {
    //         preventDefault: () => {},
    //         target: {
    //             habitName: { value: "shopping" },
    //             user: { value: 2 },
    //             daysPerWeek: { value: 3 },
    //             dailyCount: { value: 3 }
    //         }
    //     }
    //     instance = component.instance();
    //     instance.createHabit(fakeSubmitEvent);
    //     expect(component.state('habits')).toEqual([...stubHabits, { habit: "cycling", user: 2, weeklyNum: 3, dailyNum: 1 }]);

        

    //     // const count = Habits.count();
    //     // request(app).post('/habit').send(habit)
    //     // const newCount = Habits.count()
    //     // expect(newCount).toBe(count + 1);
    
    // })

    test('a function within createHabit has been called', ()=>{
        const instance = component.instance();
        jest.spyOn(instance, 'fetchHabits');
        // jest.spyOn(instance, 'weekData');
        instance.fetchHabits();
        expect(instance.fetchHabits).toHaveBeenCalledTimes(1);
        // expect(instance.weekData).toHaveBeenCalledTimes(1);
    })

    // test('it renders a form', () => {
    //     form = component.find('#newhabitForm');
    //     // form.toHaveLength(1);
    //     // expect(form).toExist();
    //     expect(form).toHaveLength(1);
    // })

    // test('it renders a form with 1 text input, 2 number inputs and a submit', () => {
    //     form = component.find('#newhabitForm');
    //     expect(form).toHaveLength(1);
    //     const inputs = form.find('input')
    //     expect(inputs).toHaveLength(4);
    //     expect(inputs.first().props().type).toBe('text');
    //     expect(inputs.second().props().type).toBe('number');
    // })

    // test('fetchHabits updates the state', () => { // working
    //     const instance = component.instance();
    //     instance.fetchHabits();
    //     expect(component.state('habits')).toEqual(stubHabits);
    // })

    test('it renders a h1', () => { // working
        const hTag = component.find('h1');
        expect(hTag).toHaveLength(1)
    })

    test('it renders the heading text', () => { // working
        expect(component.find('h1').text()).toContain('All your habits:');
    });
});

describe('testing the fetches on the page', () => {
    let component, form, instance;
    let stubHabits = [
        { "habit": "cycling", "user": 2, "weeklyNum": 3, "dailyNum": 1  }
    ]

    beforeEach(() => {
        component = shallow(<Habits user={stubHabits}/>);
    })

    test('componentDidMount does fetch once', async()=> {
        const data = await component.instance();

        //console.log(data['state']);
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    test('fetchHabits get the correct data', ()=>{
        const instance = component.instance()
        jest.spyOn(instance, 'fetchHabits');

        expect(instance['state'].habits[0].habit).toEqual('gaming');
    });

    test('createHabit posts the correct data', async()=>{
        const data = await component.instance();

        const e = { target :{
            habitName: { value: "cooking" },
            daysPerWeek: { value: 5 },
            dailyCount: { value: 2 }
        }}
        jest.spyOn(data, 'createHabit');
        data.createHabit(e);
        jest.spyOn(data, 'fetchHabits');
        expect(data.createHabit).toHaveBeenCalledTimes(1);
    });
})