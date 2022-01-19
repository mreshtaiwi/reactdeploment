import React, { useState } from 'react';
import Person from './Person';
function App() {
    const [counter, setCounter] = useState(0);
    const [divisibleOfFive, setDivisibleOfFive] = useState(false)
    const updateCounter = () => {

        // setCounter(counter + 1);
        // setDivisibleOfFive(counter > 0 && counter % 5 === 0);

        let newCount = counter + 1;
        setCounter(newCount);
        setDivisibleOfFive(newCount > 0 && newCount % 5 === 0);
    }
    return (
        <div>
            <h1>Hello World From a function based component</h1>
            <p>Number of Clicks! {counter}</p>
            <p>Factor of Five? {divisibleOfFive ? "yes" : "no"}</p>
            {/* <button onClick={() => setCounter(counter + 1)}>Click me ❗❗❗</button> */}
            <button onClick={() => updateCounter()}>Click me ❗❗❗</button>
            <br></br>
            <br></br>
            <br></br>
            <Person age="28" />

            shihab
        </div>
    )
}
export default App;