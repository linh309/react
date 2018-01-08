// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

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
// function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }
  
// function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }

// function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) {
//       return '';
//     }
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
//   }

// function BoilingVerdict(props){
//     if (props.celcious>=100)
//         return <p>The water would boil</p>;
//     else
//         return <p>The water would not boil</p>;
// }

// const scaleNames={
//     c: "Celsius",
//     f: "Fahrenheit"
// };

// class TemperatureInput extends React.Component{
//     constructor(props){
//         super(props);
//         this.changeTemperature = this.changeTemperature.bind(this);
//     }

//     changeTemperature(e){
//         this.props.onTemperatureChange(e.target.value);
//     }

//     render(){
//         return (
//             <fieldset>
//                 <legend>Enter temperature in {scaleNames[this.props.scale]}: </legend>
//                 <input value={this.props.temperature} onChange={this.changeTemperature} />                
//             </fieldset>
//         );
//     }
// }

// class Calculator extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             temperature: '',
//             scale: 'c'
//         };        
//         this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//         this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     }

//     handleCelsiusChange(temperature){
//         this.setState({scale: 'c',temperature});
//     }

//     handleFahrenheitChange(temperature){
//         this.setState({'scale': 'f', temperature});
//     }

//     render(){
//         const scale = this.state.scale;
//         const temperature = this.state.temperature;
//         const celcious = scale ==='f' ? tryConvert(temperature, toCelsius):temperature;
//         const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

//         return (
//             <div>
//                 <TemperatureInput 
//                     scale='c'
//                     temperature={celcious}
//                     onTemperatureChange={this.handleCelsiusChange}/>
//                 <TemperatureInput 
//                     scale='f'
//                     temperature={fahrenheit}
//                     onTemperatureChange={this.handleFahrenheitChange}/>
                
//                 <BoilingVerdict celcious={parseFloat(celcious)} />
//             </div>
//         );
//     }
// }

// ReactDOM.render(<Calculator />,document.getElementById("root"));

//********************************************************Lifting state up********************************************************



//********************************************************Composition and Inheritance********************************************************
// function FancyBorder(props){
//     return (
//         <div className={'FancyBorder FancyBorder-'+props.color}>
//             {props.children}
//         </div>
//     );
// }

// function WelcomDialog(){
//     return (
//         <FancyBorder color='blue'>
//             <h1 className='Dialog-title'>Welcome</h1>
//             <p className='Dialog-message'>
//                 Thanks for visiting our land
//             </p>
//         </FancyBorder>
//     );
// }

// function utilUppercase(value){
//     return value.toString().toUpperCase();
// }

// function Contacts(props) {
//     return (
//         <div className='Contacts'>{props.transform(props.content.contact)}</div>
//     );
// }

// function Chat(props){
//     return (
//         <div className='Chat'>{props.transform(props.content.chat)}</div>
//     );
// }

// function SplitPanel(props){
//     return (
//         <div className='SplitPane'>
//             <div className='SplitPane-left'>
//                 {props.left}                
//             </div>
//             <div className='SplitPane-right'>
//                 {props.right}
//             </div>
//         </div>
//     );
// }

// function App(){
//     return (
//         <SplitPanel
//             left={
//                 <Contacts content={{contact: "Linh"}} transform={utilUppercase} />
//             }
//             right={
//                 <Chat content={{chat: "Hello world!"}}  transform={utilUppercase}/>
//             }            
//          />
//     );
// }


// function FancyBorder(props){
//     return (
//         <div className={'FancyBorder FancyBorder-'+props.color}>
//             {props.children}
//         </div>
//     );
// }

// function Dialog(props){
//     return (
//         <FancyBorder color='blue'>
//             <h1 className='Dialog-title'>{props.title}</h1>
//             <p className='Dialog-message'>
//                 {props.message}
//             </p>
//             {props.children}
//         </FancyBorder>
//     );
// }

// class SignUpDialog extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             login: ''
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSignUp = this.handleSignUp.bind(this);
//     }

//     handleChange(e){
//         this.setState({login: e.target.value});
//     }

//     handleSignUp(){
//         alert(`Welcome ${this.state.login} to the hell!`);
//     }

//     render(){
//         return (
//             <Dialog title='Learning'
//                     message='singup to start using stuff'>
//                 <input type='text' value={this.state.login} onChange={this.handleChange}/>
//                 <button onClick={this.handleSignUp}>
//                     Sign me up!
//                 </button>
//             </Dialog>
//         );
//     }
// }



// ReactDOM.render(<SignUpDialog />, document.getElementById("root"));


//********************************************************Composition and Inheritance********************************************************



//********************************************************JSX in depth********************************************************
// const comment = {
//     content: <div>It's just a simple comment</div>,
//     text: <input type='text' value='put comment here' />,
//     icon: function Icon(props){
//         return <p className='icon'>{props.icontype}</p>
//     }
// };
``
// ReactDOM.render(<comment.icon icontype="special"/>, document.getElementById("root"));


// function Comment(props){
//     return (
//         <div>
//             {props.children}
//         </div>
//     );
// }

// var userComment =   <Comment>
//                         <h1>User's comment</h1>
//                         <p>It was such greating thing.</p>
//                     </Comment>;

// ReactDOM.render(userComment, document.getElementById("root"));

//********************************************************JSX in depth********************************************************



//********************************************************Refs and DOM********************************************************

// function RedTransformer(props){
//     return <span className='transform-red'>{props.value}</span>
// }

// class TransformInput extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(e){
//         let value = e.target.value;
//         this.props.Transform(value);
//     }

//     render(){
//         return (
//             <div>
//                 <label>Original </label><input type='text' value={this.props.value} onChange={this.handleChange}  />
//                 <p>{this.props.transformedValue}</p>
//             </div>
//         );
//     }
// }

// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             value: '',
//             transformedValue: null
//         };
//         this.handleTransform = this.handleTransform.bind(this);
//     }

//     handleTransform(value){
//         let originalValue = value;
//         //let transformedValue = value.toString().toLowerCase();
//         let transformedValue  = <RedTransformer value={originalValue} />
//         this.setState({
//             value: originalValue,
//             transformedValue: transformedValue
//         });
//     }

//     render(){
//         return (
//             <TransformInput value={this.state.value} transformedValue={this.state.transformedValue} Transform={this.handleTransform} />
//         );
//     }
// }
// ReactDOM.render(<App />, document.getElementById("root"));




//Adding a ref to a DOM element
// class CustomTextInput  extends React.Component{
//     constructor(props){
//         super(props);
//         this.focusTextInput = this.focusTextInput.bind(this);
//     }

//     focusTextInput(){
//         //reference to textbox and use focus function
//         this.textInput.focus();
//     }

//     confirmAutoFocused(){
//         console.log('Focused');
//     }

//     render(){
//         return (
//             <div>
//                 <input type='text' ref={(input)=>{this.textInput = input}} />
//                 <input type='button' value='focus on textbox' onClick={this.focusTextInput} />
//             </div>
//         )
//     }
// }

// class AutoFocusTextInput extends React.Component{
//     componentDidMount(){
//         // debugger;
//         this.textInput.focusTextInput();
//         this.textInput.confirmAutoFocused();
//     }

//     render(){
//         return (
//             <CustomTextInput ref={(input) => { this.textInput = input; }} />
//         );
//     }
// }
// //ReactDOM.render(<AutoFocusTextInput />, document.getElementById("root"));


// /*Exposing DOM ref to parent component */
// function ChildInput(props){
//     return (
//         <input type='text' ref={props.parentInput} value={props.value} /> //how the parent of this component access directly to this input
//     );
// }

// class Parent extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//         this.handleChangeInput = this.handleChangeInput.bind(this);
//         this.state = {
//             value: ''
//         }
//     }

//     handleChangeInput(e){
//         let value = 'aa';
//         this.setState({value});
//     }

//     handleClick(){
//         console.log(this.childInput.value);
//     }

//     render(){
//         return (
//             <div>
//                 <ChildInput parentInput={el => this.childInput = el} onChangeInput={this.handleChangeInput} value={this.state.value} />
//                 <input type='button' value="Show Value" onClick={this.handleClick} />
//             </div>            
//         );
//     }
// }

// class RegisterForm extends React.Component{
//     constructor(props){
//         super(props);                
//         this.state={
//             firstName: '',
//             lastName: ''
//         };
//         this.showInfo = this.showInfo.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     showInfo(){
//         let firstName = this.firstName.value;
//         let lastName = this.lastName.value;
//         this.setState({FullName: `${lastName} ${firstName}`});
//     }

//     handleChange(e){
//         let firstName = this.firstName.value;
//         let lastName = this.lastName.value;
//         this.setState({firstName, lastName});
//     }

//     render(){
//         return (
//             <form>
//                 <p>
//                     <label>First Name</label> <input type='text' ref={(input)=>{this.firstName = input;}} value={this.state.firstName} onChange={this.handleChange} />
//                 </p>
//                 <p>
//                     <label>Last Name</label> <input type='text' ref={(input)=>{this.lastName = input;}} value={this.state.lastName} onChange={this.handleChange}/>
//                 </p>
//                 <p>Your full name: {`${this.state.lastName} ${this.state.firstName}`}</p>
//                 <hr />
//                 <input type='button' value="Show" onClick={this.showInfo} />
//             </form>
//         );
//     }
// }

// ReactDOM.render(<RegisterForm />, document.getElementById("root"));
//********************************************************Refs and DOM********************************************************



//********************************************************Uncontrolled Component********************************************************
// class FormRegister extends React.Component {
//     constructor(props){
//         super(props);       
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleSubmit(ev){
//         console.log(`${this.firstName.value} is your ${this.checkReal.checked ? "real":"alias"} name`);
//         //clear current value
//         this.firstName.value = '';
//         ev.preventDefault();
//     }

//     render(){
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <p>
//                     <label>First Name</label> <input type='text' ref={(input)=>{this.firstName = input;}} defaultValue='Linh' />                    
//                 </p>               
//                 <p>
//                     <label>Is your real name </label> <input type='checkbox' ref={input=>this.checkReal = input} />
//                 </p>
//                 <input type='submit' value="Show" onClick={this.showInfo} />
//             </form>
//         );
//     }
// };

// ReactDOM.render(<FormRegister />, document.getElementById("root"));


//********************************************************Uncontrolled Component********************************************************


//********************************************************Optimize Performance********************************************************
// class RatRace extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             'number1': 1,
//             'number2': 1,
//             'number3': 1
//         };
//         this.race = this.race.bind(this);
//     }

//     race(e){
//         let number = e.target.dataset.number;        

//         if (number==='number1'){
//             this.setState(prevState=>({
//                 number1: prevState[number] + 1
//             }));        
//         }
//         else if (number==='number2'){
//             this.setState(prevState=>({
//                 number2: prevState[number] + 1
//             }));        
//         }
//         else{
//             this.setState(prevState=>({
//                 number3: prevState[number] + 1
//             }));        
//         }
//     }

//     //compnent lifecycle event
//     shouldComponentUpdate(nextProps, nextState){
//         if (this.state.number1!=nextState.number1){
//             return true;            
//         }
//         if (this.state.number2!=nextState.number2){
//             return true;            
//         }
//         return false;
//     }

//     render(){
//         return (            
//             <table>
//                 <thead>
//                     <tr>
//                         <td>#1</td>
//                         <td>#2</td>
//                         <td>#3</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>{this.state.number1}</td>
//                         <td>{this.state.number2}</td>
//                         <td>{this.state.number3}</td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <input type="button" data-number="number1" onClick={this.race} value='Race #1'/>
//                         </td>
//                         <td>
//                             <input type="button" data-number="number2" onClick={this.race} value='Race #2' />
//                         </td>
//                         <td>
//                             <input type="button" data-number="number3" onClick={this.race} value='Race #3' />
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>            
//         )
//     }
// }

// ReactDOM.render(<RatRace />, document.getElementById("root"));

//********************************************************Optimize Performance********************************************************


//********************************************************Integrate React to other library********************************************************



// class RegisterForm extends React.Component {
//     constructor(props){
//         super(props);
//         this.showValue = this.showValue.bind(this);        
//     }

//     showValue() {
//         let value = this.$el.val();
//         let name = this.$el.data("txtFistName");
//         console.log(`txtFistName has value = ${value}`);
//     }

//     componentDidMount(){
//         this.$el = $(this.el);
//     }
    
//     componentWillUnmount() {
//         this.$el.somePlugin('destroy');
//     }

//     render(){
//         return (
//             <div>
//                 <input data-name="txtFistName" ref={(input)=>this.el = input} />
//                 <button onClick={this.showValue}>Show value</button>                
//             </div>
//         );
//     }
// }
// ReactDOM.render(<RegisterForm />, document.getElementById("root"));

// class Chosen extends React.Component {
//     componentDidMount() {
//       this.$el = $(this.el);
//       this.$el.chosen();
//     }
    
//     componentWillUnmount() {
//       this.$el.chosen('destroy');
//     }
    
//     render() {
//       return (
//         <div>
//           <select className="Chosen-select" ref={el => this.el = el}>
//             {this.props.children}
//           </select>
//         </div>
//       );
//     }
//   }
  
//   function Example() {
//     return (
//       <Chosen>
//         <option>vanilla</option>
//         <option>chocolate</option>
//         <option>strawberry</option>
//       </Chosen>
//     );
//   }
  
//   ReactDOM.render(
//     <Example />,
//     document.getElementById('root')
//   );
  

//********************************************************Integrate React to other library********************************************************


//********************************************************Practicing********************************************************

// class Person extends React.Component {
//   constructor(props){
//     super(props);
//   }

//   render() {
//     return (
//       <p><b>{this.props.name}</b></p>
//     );
//   }
// }

// class Student extends React.Component {
//   constructor(props){
//     super(props);
//   }

//   render(){
//     return (
//       <div>
//         {this.props.person}
//       </div>
//     );
//   }
// }

//ReactDOM.render(<Person name="Linh - Person" />, document.getElementById("root"));

//ReactDOM.render(<Student name="Linh - Student" course="React" />, document.getElementById("parent"));

// ReactDOM.render(<Person name="Linh - Person" />, document.getElementById("parent"));
// ReactDOM.render(<Person name="Linh - Person" />, document.getElementById("grandParent"));

// ReactDOM.render(<Person name="Linh - Person" />, document.getElementById("grandParent"));
// ReactDOM.render(<Student name="Linh - Student" course="React" />, document.getElementById("parent"));


//********************************************************Practicing********************************************************

// let thisIsTheShowFunction = ()=>{
//   console.log('Test');
// }

// let testFunction = function(name, ...rest){  
//   var xx = rest;
//   var args = arguments;
//   console.log(rest[0]);
// }

// let defaultParamsFunction = (firstName='Linh', lastName='Nguyen') => {
//   console.log(`${lastName} ${firstName}`);
// }

// class Student {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
//   showName(){
//     console.log(this.name);
//   }
//   showNameOfName (){
//     console.log(`Name is: ${this.name}`)
//   }
// }

// class worseStudent extends Student {
//   constructor(){
//     super();
//   }

//   showName(){
//     console.log(this.name);
//   }
// }

// var linhworseStudent = new worseStudent('linh',28);

//var linhBestStudent = new Student('linh',28);
//console.log(`${linhBestStudent.name} is ${linhBestStudent.age} years old`);



// var Student1 = function () {
//   function Student1() {
//     //_classCallCheck(this, Student);

//     this.name = "Linh";
//   }

//   // _createClass(Student, [{
//   //   key: 'showName',
//   //   value: function showName() {
//   //     console.log(this.name);
//   //   }
//   // }]);

//   return Student1;
// }();


// var st1 = Student1;
// var st2 = Student1();


// //defaultParamsFunction('Nguyen','Linh');
// var st = new Student();
// //st.showName();





// function Person(){
//   this.name = 'Linh';  
// }

// // Object.defineProperty(Person,'showName',{
// //   configurable: true,
// //   enumerable: true,
// //   writable: true,
// //   value: function (){
// //     console.log(this.name);
// //   }
// // });

// Object.defineProperty(Person.prototype,'age',{
//   configurable: true,
//   enumerable: true,
//   writable: true,
//   value: 28
// });


// Object.defineProperty(Person.prototype,'showAge',{
//   configurable: true,
//   enumerable: true,
//   writable: true,
//   value: function (){
//     console.log(this.age)
//   }
// });

// var p = new Person();
// console.log(p.age);
// p.showAge();

// function uppercase(value=''){
//     return value.toUpperCase();
// }

// //default parameter
// function defaultParameterGetName(prefix, firstName='Linh', lastName='Nguyen', formatFunction){
//     let formattedName = formatFunction(`${prefix}: ${firstName} ${lastName}`);    
//     console.log(formattedName);
// }

// defaultParameterGetName('Upper Name is','Linh', 'Nguyen', value =>{ return value.toLowerCase()});

//Multi-line Strings in ES6
// var roadPoem = 'Then took the other, as just as fair,\n\t'
//     + 'And having perhaps the better claim\n\t'
//     + 'Because it was grassy and wanted wear,\n\t'
//     + 'Though as for that the passing there\n\t'
//     + 'Had worn them really about the same,\n\t'
// console.log(roadPoem);

// console.log('\n\n==========================================\n\n');


// var multiLine = `This is the line 1
//     this is line 2
//     this is line 3`;
// console.log(multiLine);

// console.log('\n\n================VANILA JS==========================\n\n');
// var multiLineVanila = 'This is the line 1\n         this is line 2\n    this is line 3      \nthis is line 4';
// console.log(multiLineVanila);


//4. Destructuring Assignment in ES6
// class Student{
//     constructor(){
//         this.name = 'Linh';
//         this.age = 12;
//         this.course = 'ReactJS';
//         this.level = 'Beginner';
//     }
// }

// var st = {
//     name: "Linh",
//     age: 28
// }

// var bestDestructuingStudent = new Student('Linh', 28);
// var {name, age} = st; //bestDestructuingStudent;
// var {course, level} = bestDestructuingStudent;

// console.log(`I'm ${name} is ${age} years old. I'm learning ${course} with level ${level}`);

//5. Enhanced Object Literals in ES6
// let firstName = 'Nguyen',
//     lastName = 'Linh';
// function showName(firstName, lastName){
//     //console.log(`${firstName} ${lastName}`);
// }

// let st = {
//     firstName, 
//     lastName,
//     showName
// };
// st.showName(st.firstName,st.lastName );



// var common = {
//   name: "Linh",
//   age: 28,
//   title: "Developer"  
// };

// //Computed property name
// function extend(common, newObject, isCreateNewObject){  
//   var newObj = {};
//   if (isCreateNewObject){
//     for(let prop in common){
//       newObj[prop] = common[prop];
//     }
//   }
//   else{
//     newObj = common;
//   }

//   for (let prop in newObject){
//     if (newObj.hasOwnProperty(prop)){
//       newObj[prop] = newObject[prop];
//     }
//   }

//   return newObj;
// };

// var propTitle = 'title';
// var newTitle = 'Senior Developer';
// var newName = "NGUYEN Linh";
// var propName = 'name';

// var extended = extend(common,{
//   [propTitle]: newTitle,
//   [propName]: newName
// }, true);

// console.log(extended);
// console.log(common);



// class StudentXXXXXX{
//     constructor(){
//         this.name = 'Linh';
//         this.age = 12;
//         this.course = 'ReactJS';
//         this.level = 'Beginner';
//     }
// }

// class StudentYYY extends StudentXXXXXX{
//   constructor(){
//     super();
//       // this.name = 'Linh';
//       // this.age = 12;
//       // this.course = 'ReactJS';
//       // this.level = 'Beginner';
//   }
// }


//================================================= Arrow function ================================================= 
//can't be used as constructors
//doesn't have its own "this"
// var fnShow = (name) => name.toUpperCase();
// var fnShow1 = (name) => {return name.toUpperCase();}
// console.log(fnShow('Linh'));
// console.log(fnShow1('Linh - with return'));

// var cars = [
//   {brand: "Toyota", speed: 100},
//   {brand: "Tesla", speed:200},
//   {brand: "Ford", speed: 300},
//   {brand: "Mazda", speed: 400},
// ];

// //ES5 used to create a new array of brand
// var brands = cars.map(function(car){
//   return car.brand;
// });
// console.log(brands);

// //ES6 used to create a new array of speed
// var speeds = cars.map(car=>car.speed);
// var horseSpeeds = speeds.filter(s=>s>=300),
//     horseES5Speeds = speeds.filter(function(s){
//       return s>=300;
//     });


// console.log(speeds);
// console.log(horseSpeeds);
// console.log(horseES5Speeds);

// var name = "Linh";
// function showName(){
//   console.log(this.name);
// }

// showName();

// function Person() {
//   // The Person() constructor defines `this` as an instance of itself.
//   this.age = 0;

//   setInterval(function growUp() {
//     // In non-strict mode, the growUp() function defines `this` 
//     // as the global object, which is different from the `this`
//     // defined by the Person() constructor.
//     this.age++;    
//     console.log(this.age);
//   }, 1000);
// }

// function fixedPerson (){
//   this.age =0;
//   var that = this;

//   setInterval(function growUp() {
//     // In non-strict mode, the growUp() function defines `this` 
//     // as the global object, which is different from the `this`
//     // defined by the Person() constructor.
//     that.age++;    
//     console.log(that.age);
//   }, 1000);
// }

// var p = new fixedPerson();
// //debugger;

// function Person(){
//   this.age = 0;
//   setInterval(() => {
//     function ownThis() {
//       this.test = 0;
//      setInterval (()=>{
//        console.log(`Test: ${this.test}, age: ${this.age}`);
//      },1000);
//     }

//     this.age++;
//     console.log(this.age);

//     ownThis.call(this);
//   }, 1000);
// }

// var p = new Person();

// function getByUrl(url){
//     return new Promise(function (resolve, reject){
//         // Do the usual XHR stuff
//         var req = new XMLHttpRequest();
//         req.open('GET', url);

//         req.onload = function() {
//             // This is called even on 404 etc
//             // so check the status
//             if (req.status == 200) {
//               // Resolve the promise with the response text
//               resolve(req.response,'aaaa');
//             }
//             else {
//               // Otherwise reject with the status text
//               // which will hopefully be a meaningful error
//               reject(Error(req.statusText));
//             }
//         };

//         // Handle network errors
//         req.onerror = function() {
//             reject(Error("Network Error"));
//         };
  
//         // Make the request
//         req.send();

//     });
// }

// var url = 'https://api.github.com/users/linh309';
// function showResponse(res,msg){
//     console.log(`OK and ${msg}'`, res);
// }


// getByUrl(url).then(showResponse, function (error){
//     console.log('error', error);
// })


// var p = new Promise(function(resolve, reject){
//   setTimeout(() => {
//     resolve('aa','bb','cc');        
//   }, 1000);  
// });

// p.then(function(data,data1,data2){
//   console.log(data);
//   console.log(data1);
//   console.log(data2);
// });

// var img1 = document.querySelector('.img-1');

// function loaded(e){
//   console.log(e);
// }

// if (img1.complete) {
//   loaded();
// }
// else {
//   img1.addEventListener("load", loaded);
// }

// img1.addEventListener('error',function(){
//   console.log("Error");
// });



// function get(url) {
//     //Create and return a promise

//     return new Promise(function(resolve, reject) {
//         var req = new XMLHttpRequest();
//         req.open("GET", url);

//         req.onload = function (){
//             if (req.status==200) {
//                 //call solve function
//                 resolve(req.response);
//             }
//             else {
//                 reject(req.statusText);
//             }
//         };

//         //handle error
//         req.onerror = () => {
//             reject("Network Error");
//         };

//         req.send();
//     });
// }


//     return new Promise(function(resolve, reject) {               
//         setTimeout(function (){
//             let req = new XMLHttpRequest();
//             req.open("GET", url);
    
//             req.onload = function (){
//                 if (req.status==200) {
//                     //call solve function
//                     resolve(req.response);
//                 }
//                 else {
//                     reject(req.statusText);
//                 }
//             };

//             req.onerror = () => {
//                 reject("Network Error");
//             };

//             req.send();
//         },5000);        
//     });
// }



// let count = 0;
// let counter = setInterval(()=>{console.log(++count)},1000);

// var url = 'https://api.github.com/users/linh309';
// get(url).then(function(response){
//     var obj = JSON.parse(response);
//     console.log("Success, this response will be parsed as JSON and used to as data to next process", response);
//     console.log(`Your ID is ${obj.id}`);

//     return obj;
// }, function (response){
//     console.log(response);
// })
// .then(function(preResponse) {
//     return preResponse.avatar_url
// })
// .then(function(data){
//     var img = document.getElementById("imgAvatar");
//     //img.src=data;
// });



// function showName(){
//     var name = "Linh";
//     if (name!==undefined)    {
//         var name = 10;
//     }
//     console.log(name);
// }

// showName();
//     img.src=data;
//     clearInterval(counter);
// })



// var a  = 100;
// console.log(a);
// var a  = 1200;
// console.log(`a = ${a}`);

// var a = 10;
// function showName(){    
//     if (a >= 10){
//         let a = 20;
//         console.log(`let a = 20;: ${a}`)
//     }

//     if (a >= 20){
//         let a = 30;
//         console.log(`let a = 30: ${a}`)
//     }    
//     console.log(`a inside function: ${a}`)
// }

// showName();
// console.log(`a outside function: ${a}`)

// var age = 100;
// if(age > 12) {
//   let dogYears = age * 7;
//   console.log(`You are ${dogYears} dog years old!`);
// }

// console.log(dogYears);

// var dimension = {
//     width: 5,
//     height: 5
// };

// class Rectangle {
//     constructor(props) {
//         this.height = props.width;
//         this.width = props.height;
//     }    

//     get area(){
//         return this.calcArea();
//     }

//     //method
//     calcArea(){
//         return this.width * this.height;
//     }
// }

// let square = new Rectangle({width: 7, height: 9});
// let area = square.area;
// var areaFn = square.calcArea();
// console.log(`area is: ${area}; calcArea fn = ${areaFn}`);


// var createClassFromConstructor = function (){
//     return function (constructor){
//         return constructor;
//     }
// }

// // function createClassFromConstructor(constructor) {
// //     return function (){
// //         return constructor;
// //     }    
// // }

// var Rectangle = function (){
//     //function Rectangle(props) {
//         function Rectangle1() {
//         this.height = 1;//props.height;
//         this.width = 2; //props.width;
//     }
//     // createClassFromConstructor(Rectangle);
//     return Rectangle1;
// }

// //var square = new Rectangle({ width: 7, height: 9 })();
// //var square = new Rectangle({ width: 7, height: 9 });
// var square = new Rectangle();
// console.log(`${square.width} - ${square.height}`);