import React from 'react';
import "./App.css"
function Counter(props) {
    console.log(props)
    return (
        <div className="App" style={{margin: "10px"}}>
            <button className="button" onClick={() => props.minus(props.index)}>-</button>

            {props.count}
            <button className="button" onClick={() => props.plus(props.index)}>+</button>
            <button className="button" onClick={() => props.reset(props.index)}>Reset</button>
            <button className="button" onClick={() => props.del(props.index)}>Delete</button>


        </div>

    );
}

export default Counter;
