import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let now = new Date();
const DateEx = <p>Now is {now.toLocaleDateString()}</p>;
const dtEx = DateEx;

const exDt = now;

function Welcome(props){
    if (props.isLogin){
        let now = new Date();
        let value = '<></a>dsadas><">"';
        //return <p>You logged at {now.toLocaleDateString()}</p>;
        return <p>{value}</p>;
    }
    else {
        return <p>please login first</p>;
    }
}

const welcome = Welcome(false);
debugger;
ReactDOM.render(<Welcome isLogin={true} />, document.getElementById("root"));