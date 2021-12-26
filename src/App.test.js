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

test('renders without error', ()=> {
const wrapper = setUp();
// eslint-disable-next-line testing-library/await-async-query
const appComponent = findByTestAttr(wrapper, 'component-app');
expect(appComponent.length).toBe(1);
});

test('renders increment button', ()=> {
    const wrapper = setUp();
    // eslint-disable-next-line testing-library/await-async-query
    const button = findByTestAttr(wrapper, 'increment-button')
    expect(button.length).toBe(1);
})

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