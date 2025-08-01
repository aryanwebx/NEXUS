import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/card";

function App(){

    return (
        <>
            <h1 className="heading">Bitcoin Insights</h1>
            <Card/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);