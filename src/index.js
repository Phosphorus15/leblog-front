import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './index.css';

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    Axios.post("").then(
        res => res.data
    )
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);