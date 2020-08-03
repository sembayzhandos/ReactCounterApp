import React, {useState} from 'react';
import Counter from "./Counter";
import "./App.css"

function App() {
    const [counters, setCounters] = useState([0]);
    const addCounter = () => {
        const r = Math.round(Math.random() * 10);
        setCounters([...counters, r])
    }
    const plus = (index) => {
        const newCounter = [...counters]
        newCounter[index] = newCounter[index] + 1
        setCounters(newCounter)
    }
    const minus = (index) => {
        const newCounter = [...counters]
        newCounter[index] = newCounter[index] - 1
        setCounters(newCounter)
    }

    const del = (index) => {
        const updatedCount = counters.filter((element, i) => i !== index)
        setCounters(updatedCount)
    }

    const reset = (index) => {
        const newCounter = [...counters]
        newCounter[index] = 0
        setCounters(newCounter)
    }

    const ResetAll = () => {
        setCounters(counters.map(element => 0))
    }

    return (
        <div className="App" >
            <h1>Counters</h1>
            {counters.map((el, i) => (
                <Counter
                    count={el}
                    key={i}
                    index={i}
                    plus={plus}
                    minus={minus}
                    del={del}
                    reset={reset}
                />
            ))}

            <button className="button1" onClick={addCounter}>Add Counter</button>
            <button className="button1" onClick={ResetAll}>Reset all</button>
        </div>
    );
}

export default App;
