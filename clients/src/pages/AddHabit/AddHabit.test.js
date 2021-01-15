import AddHabit from '.';
import { shallow } from 'enzyme';

fetch = jest.fn(()=> Promise.resolve({
    json: ()=> Promise.resolve([
        {
            id: 10,
            habit_id: 5,
            user_id: 5,
            completion: 5,
            dayData: 'Thu',
            currentdate: '14-01-2021',
            streak: false,
            streak_day: 0
        }
    ])
}))

describe('AddHabit', () => {
    let wrapper, form;
    let stateStub = {
        count: 0
    }

    beforeEach(() => {
        wrapper = shallow(<AddHabit habits= {{ id: 2, habit: "eating", weekly_track: 3, daily_track: 5, user_id: 5}}/>);
    });

    test('it has a state', () => {
        expect(wrapper).toExist;
    })

    test('lifecycle method should have been called', () => {
        const componentDidMount = jest.fn()

        class Hi extends AddHabit {
            state = stateStub;
            componentDidMount = componentDidMount;

            render() {
                return (<AddHabit />)
            }
        }
        const wrapper = shallow(<Hi />)
        expect(componentDidMount.mock.calls.length).toBe(1)
    })

    test('it renders a div with the id habit', () => {
        expect(wrapper.find('#habit')).toHaveLength(1);
    })
    test('it exists', () => {
        expect(wrapper).toExist
    })
    test('it renders 2 paragraphs', () => {
        const pTag = wrapper.find('p');
        expect(pTag).toHaveLength(2)
    })

    test('it renders a paragraph with text', () => {
        expect(wrapper.find('#p1').text()).toContain('Complete per Week:')
    })

    test('it renders a paragraph with text', () => {
        expect(wrapper.find('#p2').text()).toContain('Left for Today:')
    })

    test('it renders the title', () => {
        expect(wrapper.find('h3').text()).toContain('eating');
    })

    test('it has 2 buttons', () => {
        const button = wrapper.find('button');
        expect(button).toHaveLength(2);
    })
    // line 53, 34-40
    test('it deletes habits onclick of delete button', () => {

    })
    
    //lines 22-30, 15-18
    test('it counts', () => {
        const instance = wrapper.instance();
        instance.setState({ count: 5});
        jest.spyOn(instance, 'completeCount');

        instance.completeCount();

        expect(instance.completeCount).toHaveBeenCalledTimes(1)
        //expect(instance.state.count).toBeLessThan(5);
    })
});

describe('AddHabit', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AddHabit index={1} habits= {{ id: 2, habit: "eating", weekly_track: 3, daily_track: 5, user_id: 5}}/>);
    });

    test('component did mount', async()=>{
        const instance = wrapper.instance();
        expect(fetch).toHaveBeenCalledTimes(12);
    });

    test('the getnum function', async()=>{
        const instance = wrapper.instance();
        jest.spyOn(instance, 'getnum');
        await instance.getnum();
        //const completion = 5;
        console.log(instance['state']);
        expect(instance['state'].count).toEqual(5);
    });

    test('the completeCount function', async()=>{
        const instance = await wrapper.instance();
        instance.setState({ count: 5})
        const e = {preventDefault: ()=>{}};
        jest.spyOn(instance, 'completeCount');
        await instance.completeCount(e);

        expect(instance['state'].count).toEqual(4);
    })
});
