import {createStore} from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import todoApp from './reducers';


//Import function
import {
    ADD_TODO,
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions';

//Create textbox and button for AddTodo
// let AddTodo = ({ dispatch }) => {
//     let input;
//     return (
//         <form onSubmit={e=>{
//                 e.preventDefault();                
//                 dispatch({type: ADD_TODO, text: input.value});
//                 input.value='';
//             }}
//         >
//             <input ref={node=>{input = node}} />
//             <button type='submit'>Add Todo</button>
//         </form>
//     );
// };
// AddTodo = connect()(AddTodo);

let AddTodo = ({dispatch}) => {
    let input;
    return (
        <form onSubmit={e=>{
                e.preventDefault();                
                dispatch({type: ADD_TODO, text: input.value});
                input.value='';
            }}
        >
            <input ref={node=>{input = node}} />
            <button type='submit'>Add Todo</button>
        </form>
    );
};

AddTodo = connect()(AddTodo);

let TodoList = ({todos}) => {    
    <ul>        
        {todos.map((todo, index) => (           
            <li key={index}>{todo}</li>
        ))}
    </ul>
}
const VisibleTodoList = connect(
    (state) => {
        return{
            todos: state.todos
        }
    }
)(TodoList);


let store = createStore(todoApp);

const App = () => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
        </div>
    );    
};

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
