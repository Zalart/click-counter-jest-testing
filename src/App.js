import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);
    const [error, setError] = useState(false);
    const incrementHandler = () => {
        error && setError(false);
        setCount(count+1);
    }
    const decrementHandler = () => {
        count>0 ? setCount(count-1) : setError(true)
    }
  return (
    <div className="App" data-test="component-app">
     <h1 data-test="counter-display">The counter: <span data-test="count">{count}</span></h1>
        {error && <div className="error-message" data-test="error-message">The counter can't be lower than 0</div>}
        <button data-test="increment-button" onClick={incrementHandler}>Increment counter</button>
        <button data-test="decrement-button" onClick={decrementHandler}>Decrement counter</button>
    </div>
  );
}

export default App;
