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


// function Welcome(props){    
//     return (
//         <div>
//             <h1>Welcome <span className='welcome-name'>{props.name}</span> from <span className='welcome-country'>{props.country}</span></h1>
//         </div>
//     );
// }

// class Welcome1 extends React.Component {
//     render(){
//         let that = this;        
//         return(
//             <div>
//                 <h1>Welcome <span className='welcome-name'>{this.props.name}</span> from <span className='welcome-country'>{this.props.country}</span></h1>
//             </div>
//         )
//     }
// }

// //var elWelcome = <Welcome name='linh' country='Viet Nam'/>;
// var elWelcome = <Welcome1 name='linh' country='Viet Nam'/>;

// //ReactDOM.render(<Welcome />, document.getElementById("root"));
// ReactDOM.render(elWelcome, document.getElementById("root"));

//********************************************************create composing component ********************************************************

// //utility function 
// function formatDate(date) {
//     return date.toLocaleDateString();
//   }

// //Create Avatar component
// function Avatar(props){
//     return (
//         <img className='avatar'
//             src={props.user.avatarUrl}
//             alt={props.user.name}
//         />
//     );
// }

// function UserInfo(props){
//     return (
//         <div className='UserInfo'>
//             <Avatar user={props.user} />
//             <div className='UserInfo-name'>
//                 {props.user.name}
//             </div>
//         </div>
//     );
// }

// //create comment component as function: It includes other components: Avatar + UserInfo
// function Comment(props){
//     return (
//         <div className='comment'>
//             <UserInfo user={props.author} />
//             <div className='comment-text'>
//                 {props.text}
//             </div>
//             <div className='comment-date'>
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }

// const objComment = {
//     author: {
//         avatarUrl:  'http://placekitten.com/g/64/64',
//         name: "Grafield"
//     },
//     text: "I like what i'm doing",
//     date: new Date()
// };

// ReactDOM.render(
//     <Comment
//         author={objComment.author}
//         text = {objComment.text}
//         date = {objComment.date}
//     />, 
//  document.getElementById('root'));



 //********************************************************create composing component ********************************************************



//********************************************************State and lifecycle ********************************************************
// function ClockFn(props){
//     return (
//         <p>{props.date.toLocaleTimeString()}</p>
//     );
// }

// function tickFn(){
//     ReactDOM.render(<ClockFn date={new Date()} />, document.getElementById("root"));
// }

// //create clock component as class
// class Clock extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>Hello guys!</h1>
//                 <p><b>Now is </b><span className='header1'>{this.props.date.toLocaleTimeString()}</span></p>
//             </div>
//         )
//     }
// }

// function tick(){
//     ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
// }

// setInterval(tick, 1000);




//this function is also a component 
// function FormatDateTime (props){
//     return (        
//         <span className='header1'>{props.date.toLocaleTimeString()}</span>
//     );
// }

// //create clock component as class
// class Clock extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             date: new Date(),
//             numberOfSecond: 0
//         };
//     }

//     componentDidMount() {
//         this.timerId = setInterval(
//             ()=> this.tick(),
//             1000);
//     }

//     componentWillUnmount(){
//         clearInterval(this.timerId);
//     }

//     tick() {
//         this.setState((prevState, props) => ({
//             date: new Date(),
//             numberOfSecond: prevState.numberOfSecond + parseInt(this.props.stepCount)
//         }));
//     }
 
//     render(){
//         return (
//             <div>
//                 <h1>Hello guys! {this.props.name}</h1>
//                 <p><b>Now is </b><FormatDateTime date={this.state.date} /></p>
//                 <p><b>Number of seconds </b><span>{this.state.numberOfSecond}</span></p>
//             </div>
//         )
//     }
// }

// //display multiple clocks in one element
// function App(){
//     return (
//         <div>
//             <Clock name='Nguyen' stepCount="1"/>
//             <Clock name='Van' stepCount="2"/>
//             <Clock name='Linh' stepCount="3"/>
//         </div>
//     );
// }

// // ReactDOM.render(<Clock name='Linh' stepCount="1"/>, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById("root"));





//********************************************************State and lifecycle ********************************************************



//********************************************************Event Handling ********************************************************
// class Toggle extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             isToggle: true
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(name,date, event){
//         // this.setState(prevState =>({

//         // }));
//         // this.setState({
//         //     isToggle: false
//         // });
//         //debugger;
//         this.setState(prevState=>({
//             isToggle: !prevState.isToggle
//         }));
//     }

//     render(){
//         return (
//             <button onClick={this.handleClick.bind(this,'linh',new Date())}>
//                 {this.state.isToggle ? 'ON' : 'OFF'}
//             </button>
//         );
//     }
// }

// ReactDOM.render(<Toggle />,document.getElementById("root"));


//********************************************************Event Handling ********************************************************




//********************************************************Conditionally rendering ********************************************************

// function LoginButton(props){
//     return <button onClick={props.onClick}>Log in</button>
// }

// function LogoutButton(props){
//     return <button onClick={props.onClick}>Log out</button>
// }

// function UserGreeting(){
//     return <h1>Welcome to our land</h1>;
// }

// function GuestGreeting(){
//     return <h1>Please login</h1>;
// }

// function Greeting(props){
//     if (props.isLogged)
//         return <UserGreeting />;
//     else    
//         return <GuestGreeting />;
// }

// class LoginControl extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             isLogged: false            
//         };

//         //bind event
//         this.handleLogin = this.handleLogin.bind(this);
//         this.handleLogout = this.handleLogout.bind(this);
//     }

//     handleLogin(){
//         this.setState({
//             isLogged: true
//         });
//     }

//     handleLogout(){
//         this.setState({
//             isLogged: false
//         });
//     }
    
//     render(){
//         const isLogged = this.state.isLogged;
//         let button = isLogged
//                         ? <LogoutButton onClick={this.handleLogout} />
//                         : <LoginButton onClick={this.handleLogin} />;

//         // if (isLogged){
//         //     button = <LogoutButton onClick={this.handleLogout} />
//         // }
//         // else{
//         //     button = <LoginButton onClick={this.handleLogin} />
//         // }

//         return (
//             <div>
//                 <Greeting isLogged={this.state.isLogged} />
//                 {button}
//             </div>
//         );
//     }
// }

// ReactDOM.render(<LoginControl />, document.getElementById("root"));

//********************************************************Conditionally rendering ********************************************************




//********************************************************Lists and Keys ********************************************************

//use map to create a new array by calling a function for every element
// var arNumber = [1,2,3,4,5];
// var doubled = arNumber.map(num=>{return num*3;});
// var listNumber = arNumber.map(num => {
//     return <li>{num*2}</li>
// });

// const arNumber = [1,2,3,4,5];

// //create list item of <li>
// function ListItem(props){
//     return <li>{props.value}</li>
// }

// function NumberList(props){
//     //const numbers = props.numbers.map(num=>{ return <li key={num.toString()}>{num}</li>})

//     // const numbers = props.numbers.map(num=>{
//     //     return <ListItem key={num.toString()} value={num} />
//     // });

//     const numbers = props.numbers.map((num) => {
//         return <ListItem key={num.toString()} value={num} />;
//     });

//     return <ul>{numbers}</ul>;
// }

// ReactDOM.render(<NumberList numbers={arNumber}/>, document.getElementById("root"));

// function Menu(props) {
//     var leftMenu = (
//         <ul>
//             {props.menus.map((menu)=>
//                 {return <li key={menu.id}>{menu.title}</li>})
//             }
//         </ul>);
//     var mainContent = (
//         <ul>
//             {props.menus.map((menu)=>
//                 <li key={menu.id}>
//                     <h3>{menu.title}</h3>
//                     <p>{menu.content}</p>
//                 </li>
//             )}
//         </ul>
//     );
    


//     return (
//         <div>
//             {leftMenu}
//             <hr />
//             {mainContent}
//         </div>
//     );
// }

// const menus = [ {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
// {id: 2, title: 'Installation', content: 'You can install React from npm.'}];

// ReactDOM.render(<Menu menus={menus}/>,document.getElementById("root"))



//********************************************************Lists and Keys ********************************************************



//********************************************************Form And Inputs ********************************************************

// class NameForm extends React.Component{
//     constructor(props){
//         super(props);            
//         this.state = {
//             value: 'coconut',
//             isGoing: false
//         };        
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//         this.handleInputChange = this.handleInputChange.bind(this);
//     }

//     handleSubmit(ev){
//         console.log(this.state.value);
//         ev.preventDefault();
//     }

//     handleChange(e){
//         this.setState({
//             value: e.target.value
//         });

//         {/* <form onSubmit={this.handleSubmit}>
//                 <select value={this.state.value} onChange={this.handleChange}>
//                     <option value="grapefruit">Grapefruit</option>
//                     <option value="lime">Lime</option>
//                     <option value="coconut">Coconut</option>
//                     <option value="mango">Mango</option>
//                 </select>

//                 <input type="submit" value="submit" />
//             </form> 
//         */}
//     }

//     handleInputChange(event) {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;
    
//         this.setState({
//           [name]: value
//         });
//       }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input type='checkbox' name="isGoing" value={this.state.isGoing} onChange={this.handleInputChange} />
//             </form>                
//         );        
//     }
// }

// ReactDOM.render(<NameForm />,document.getElementById("root"))

//********************************************************Form And Inputs ********************************************************


//********************************************************Lifting state up********************************************************
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

function BoilingVerdict(props){
    if (props.celcious>=100)
        return <p>The water would boil</p>;
    else
        return <p>The water would not boil</p>;
}

const scaleNames={
    c: "Celsius",
    f: "Fahrenheit"
};

class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.changeTemperature = this.changeTemperature.bind(this);
    }

    changeTemperature(e){
        this.props.onTemperatureChange(e.target.value);
    }

    render(){
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[this.props.scale]}: </legend>
                <input value={this.props.temperature} onChange={this.changeTemperature} />                
            </fieldset>
        );
    }
}

function WelcomDialog(){
    return (
        <FancyBorder color='blue'>
            <h1 className='Dialog-title'>Welcome</h1>
            <p className='Dialog-message'>
                Thanks for visiting our land
            </p>
        </FancyBorder>
    );
    }

    handleCelsiusChange(temperature){
        this.setState({scale: 'c',temperature});
    }

    handleFahrenheitChange(temperature){
        this.setState({'scale': 'f', temperature});
    }

    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celcious = scale ==='f' ? tryConvert(temperature, toCelsius):temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput 
                    scale='c'
                    temperature={celcious}
                    onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput 
                    scale='f'
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}/>
                
                <BoilingVerdict celcious={parseFloat(celcious)} />
            </div>
        );
    }
}

ReactDOM.render(<Calculator />,document.getElementById("root"));

//********************************************************Lifting state up********************************************************



