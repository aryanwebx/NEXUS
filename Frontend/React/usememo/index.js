import React, { useState,useMemo } from "react";
import ReactDOM from "react-dom/client";


function App() {
    const [count, setcount] = useState(0);
    const [number, setnumber] = useState("");
    
    
    function fibonacci(n) {
        if (n <= 1) {
            return n;
        }

        return fibonacci(n - 1) + fibonacci(n - 2);

    }


    const result=useMemo(()=>fibonacci(number),[number])

    return (
        <>
            <div>Counter is {count}</div>
            <button onClick={() => { setcount(count + 1) }}>increment</button>
            <div>Fibonacci is:{result}</div>
            <input type="number" value={number} onChange={(e) => { setnumber(e.target.value) }}></input>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)