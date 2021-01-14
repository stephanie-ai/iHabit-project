import AddHabit from '.';
import { shallow } from 'enzyme';

describe('AddHabit', () => {
    let wrapper, form;
    let stateStub = {
        count: 0
    }
    let stubHandleClick;

    beforeEach(() => {
        wrapper = shallow(<AddHabit habits= {{ id: 2, habit: "eating", weekly_track: 3, daily_track: 5, user_id: 5}} deletehabit = {stubHandleClick} />);
        stubHandleClick = jest.fn();
    });

    test('it has a state', () => {

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

    test('it fetches data from server in order to delete a habit', () => {
  
    })
    // line 53, 34-40
    test('it calls a deletehabit prop when clicked', () => {
        let btn = wrapper.find('.delete-btn')
        btn.stimulate('click');
        expect(wrapper.find('delete-btn'))
        expect(stubHandleClick.mock.calls.length).toBe(1);
    })

    //lines 22-30, 15-18
    test('it counts', () => {

    })
})
