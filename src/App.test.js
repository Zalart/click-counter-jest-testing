import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setUp = () => shallow(<App />);

const findByTestAttr = (wrapper, value) => wrapper.find(`[data-test='${value}']`);

describe('Elements rendered', () => {
    test('renders without error', ()=> {
        const wrapper = setUp();
// eslint-disable-next-line testing-library/await-async-query
        const appComponent = findByTestAttr(wrapper, 'component-app');
        expect(appComponent.length).toBe(1);
    });

    test('renders counter display', () => {
        const wrapper = setUp();
        // eslint-disable-next-line testing-library/await-async-query
        const counter = findByTestAttr(wrapper, 'counter-display');
        expect(counter.length).toBe(1);
    })

    test('counter display starts at 0', ()=> {
        const wrapper = setUp();
        // eslint-disable-next-line testing-library/await-async-query
        const counterSpanText = findByTestAttr(wrapper, 'count').text();
        expect(counterSpanText).toBe('0');
    })
});

describe('Increment action', function () {
    test('renders increment button', ()=> {
        const wrapper = setUp();
        // eslint-disable-next-line testing-library/await-async-query
        const button = findByTestAttr(wrapper, 'increment-button')
        expect(button.length).toBe(1);
    })

    test('clicking the button increments the counter display', ()=> {
        const wrapper = setUp();
        // eslint-disable-next-line testing-library/await-async-query
        const counter = findByTestAttr(wrapper, 'count').text();
        // eslint-disable-next-line testing-library/await-async-query
        const buttonClick = findByTestAttr(wrapper, 'increment-button').simulate('click');
        // eslint-disable-next-line testing-library/await-async-query
        const incrementedCounter = findByTestAttr(wrapper, 'count').text();
        expect(+counter + 1).toBe(+incrementedCounter);
    })
});

describe('Decrement action', function () {
    test('renders decrement button', ()=> {
        const wrapper = setUp();
        // eslint-disable-next-line testing-library/await-async-query
        const decrementButton = findByTestAttr(wrapper, 'decrement-button');
        expect(decrementButton.length).toBe(1);
    })

    test('clicking the decrement button decrements the counter', () => {
        const wrapper = setUp();
        // eslint-disable-next-line testing-library/await-async-query
        const incrementClick = findByTestAttr(wrapper, 'increment-button').simulate('click');
        // eslint-disable-next-line testing-library/await-async-query
        const decrementClick = findByTestAttr(wrapper, 'decrement-button').simulate('click');
        // eslint-disable-next-line testing-library/await-async-query
        const counter = findByTestAttr(wrapper, 'count').text();
        expect(counter).toBe("0");
    })
});
    describe('Error block', ()=> {
        test('Error block is rendered only when needed', () => {
            const wrapper = setUp();
            // eslint-disable-next-line testing-library/await-async-query
            const errorBlock = findByTestAttr(wrapper, 'error-block');
            expect(errorBlock.length).toBe(0);
        })
        describe('Decrement click and error block interaction', function () {
            let wrapper;
            beforeEach(()=> {
                wrapper = setUp();
                // eslint-disable-next-line testing-library/await-async-query
                const decrementClick = findByTestAttr(wrapper, 'decrement-button').simulate('click');
            })

            test('Display Error block when decrement button is clicked when counter is 0', ()=> {
                // eslint-disable-next-line testing-library/await-async-query
                const errorMessage = findByTestAttr(wrapper, 'error-message');
                expect(errorMessage.length).toBe(1);
            })

            test('Stay on 0 when decrement click on 0 counter state', ()=> {
                // eslint-disable-next-line testing-library/await-async-query
                const counter = findByTestAttr(wrapper, 'count').text();
                expect(counter).toBe("0");
            })
            test('Remove error message when increment button click', ()=> {
                // eslint-disable-next-line testing-library/await-async-query
                const incrementClick = findByTestAttr(wrapper, 'increment-button').simulate('click');
                // eslint-disable-next-line testing-library/await-async-query
                const errorMessage = findByTestAttr(wrapper, 'errorMessage');
                expect(errorMessage.length).toBe(0);
            })
        });

    })


