import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client";

function App(){

    const [color,setcolor]=useState('black');
    document.body.style.backgroundColor=color;

    return(
        <>
            <h1>BACKGROUND COLOR CHANGER</h1>
            <div className="button">
                <button style={{backgroundColor:'red'}} onClick={()=>{setcolor("red")}}>RED</button>
                <button style={{backgroundColor:'green'}} onClick={()=>{setcolor("green")}}>GREEN</button>
                <button style={{backgroundColor:'yellow'}} onClick={()=>{setcolor("yellow")}}>YELLOW</button>
                <button style={{backgroundColor:'pink'}} onClick={()=>{setcolor("pink")}}>PINK</button>
                <button style={{backgroundColor:'blue'}} onClick={()=>{setcolor("blue")}}>BLUE</button>
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);