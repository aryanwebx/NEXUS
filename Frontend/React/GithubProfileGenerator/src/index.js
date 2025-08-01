import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import Navbar from "./component/navbar";
import Body from "./component/body";

function App(){

    return(
        <>
        <Navbar/>
        <Body/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)