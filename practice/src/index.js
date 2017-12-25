import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';


// function fullName(firstName, lastName){
//     return `${lastName} ${firstName}`;
// }

// var user = {
//     firstName: 'Linh',
//     lastName: 'Nguyen'
// };
// var {firstName, lastName} = user;

// const element = <h1 role='1' custom='2' className='header1'>Update color scheme {fullName(firstName, lastName)} and {2+2}</h1>;

// ReactDOM.render(element, document.getElementById('root'));



// function tick(){
//     const element = (
//         <div>
//             <h1>Now is</h1>
//             <h2><span>{new Date().toLocaleDateString()}</span></h2>
//             <h2><span>{new Date().toLocaleTimeString()}</span></h2>
//         </div>
//     );

//     ReactDOM.render(element, document.getElementById("root"));
// }

// setInterval(tick, 1000);


function Welcome(props){    
    return (
        <div>
            <h1>Welcome <span className='welcome-name'>{props.name}</span> from <span className='welcome-country'>{props.country}</span></h1>
        </div>
    );
}

class Welcome1 extends React.Component {
    render(){
        let that = this;        
        return(
            <div>
                <h1>Welcome <span className='welcome-name'>{this.props.name}</span> from <span className='welcome-country'>{this.props.country}</span></h1>
            </div>
        )
    }
}

//var elWelcome = <Welcome name='linh' country='Viet Nam'/>;
var elWelcome = <Welcome1 name='linh' country='Viet Nam'/>;

//ReactDOM.render(<Welcome />, document.getElementById("root"));
ReactDOM.render(elWelcome, document.getElementById("root"));