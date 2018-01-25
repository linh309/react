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
    VisibilityFilters,
    SET_VISIBILITY_FILTER
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
                if (!input.value.trim()) {
                  return false;
                }
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

const Todo = ({text, completed, onClick}) => (
  <li 
    style={{textDecoration: completed ? "line-through": "none"}} 
    onClick={onClick}>    
    {text}
  </li>
)

const TodoList = ({ todos, clickTodo }) => (
    <ul>
      {todos.map((todo, index) => (        
        <Todo key={index} {...todo} onClick={()=> clickTodo(index)}  />
      ))}
    </ul>
)

function getVisibleTodos(todos, filter) {
  switch(filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t=>t.completed);
    case 'SHOW_ALL':
    default:
      return todos;    
  }
}

const mapStateToProp = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProp = dispatch => {
  return {
    clickTodo: id => {
      dispatch(toggleTodo(id));
    }    
  }
}

const VisibleTodoList = connect(
  mapStateToProp,
  mapDispatchToProp
)(TodoList);

let Link = ({onClick, text}) => (
  <a 
    href=""
    onClick={(e) =>{
      e.preventDefault();
      onClick();
    }}>    
    {text}
  </a>
);

const mapStateToPropLink = (state, ownProps) => {
  return {
    active: state.visibilityFilter == ownProps.filter
  };
}

const mapStateToDispatchLink = (dispatch, ownProps) => {  
  return {
    onClick: () => {      
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
}

const FilterLink = connect(
  mapStateToPropLink,
  mapStateToDispatchLink
)(Link);


// const Footer = () => (
//   <p>
//     <a
//       href=""
//       onClick={e=>{
//         e.preventDefault();

//       }}
//     >
//     All
//     </a>
//   </p>
// )

let store = createStore(todoApp);

const App = () => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            {/* <FilterLink text='Show completed1' filter="SHOW_COMPLETED" /> */}
            <FilterLink text="Completed" filter="SHOW_COMPLETED">Completed</FilterLink>
        </div>
    );    
};

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)
