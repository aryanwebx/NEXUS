import React from "react";
import { useState } from "react";
import RecatDOM from "react-dom/client";

function Counter() {
    const [count, setcount] = useState(0)
    function incrementNumber() {
        setcount(count + 1);

    }

    function decrementNumber() {
        setcount(count - 1);
    }


    return (
        <div className="counter">
            <h1>Count is: {count}</h1>
            <div>
                <button className="increment" onClick={incrementNumber}>Increment</button>
                <button className="decrement" onClick={decrementNumber}>Decrement</button>
            </div>
        </div>
    )
}


RecatDOM.createRoot(document.getElementById('root')).render(<Counter />)