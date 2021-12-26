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
        if (count===0) {
            setError(true)
        } else {
            setCount(count - 1)
         }
    }
  return (
    <div className="App" data-test="component-app">
     <h1 data-test="counter-display">The counter: <span data-test="count">{count}</span></h1>
        {error && <div className="error-message">The counter can't be lower than "0"</div>}
        <button data-test="increment-button" onClick={incrementHandler}>Increment counter</button>
        <button data-test="decrement-button" onClick={decrementHandler}>Decrement counter</button>
    </div>
  );
}

export default App;
