import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar';
import Card from './components/card';
import arr from "./utils/dummy";

function App() {
    const [A, setA] = useState(arr)
    function sort(){
        
      A.sort((a,b)=>a.Price-b.Price)
        setA([...A]);
    }
    
       return (
        <>
            <Navbar />
               <button id='sort' onClick={sort}>Sort by Price</button>
               
            <h1 id="category">SHOP BY CATEGORY</h1>
            <div className='Card'>
                {
                    A.map((value, index) => <Card key={index} cloth={value.cloth} offer={value.Offer} price={value.Price} />)
                }
            </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
