import {createStore} from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import todoApp from './reducers';


//Import function
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions';

// let store = createStore(todoApp);

// const unsubcribe = store.subscribe(()=> {
//     console.log(store.getState());
// }) ;

// //Dispatch action
// store.dispatch(addTodo('learn about action 1'));
// store.dispatch(addTodo('learn about action 2'));
// store.dispatch(toggleTodo(1));
// store.dispatch(addTodo('learn about action 3'));




const Todo = ({ onClick, completed, text }) => (
    <li
      onClick={onClick}
      style={ {
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
)

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
      {todos.map((todo, index) => (
        <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
      ))}
    </ul>
  )

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a
        href=""
        onClick={e => {
            e.preventDefault()
            onClick()
        }}
        >
        {children}
        </a>
    )
}

const mapStateToPropsFilterLink = (state, ownProps) => {
    return {
      active: ownProps.filter === state.visibilityFilter
    }
  }

  const mapDispatchToPropsFilterLink = (dispatch, ownProps) => {
    return {
      onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
      }
    }
  }

  const FilterLink = connect(
    mapStateToPropsFilterLink,
    mapDispatchToPropsFilterLink
  )(Link)

const Footer = () => (
    <p>
      Show:
      {' '}
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      {', '}
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
      {', '}
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
    </p>
)  


const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
      case 'SHOW_ALL':
      default:
        return todos
    }
  }
  
const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onTodoClick: id => {
        dispatch(toggleTodo(id))
      }
    }
  }

  const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)
  




  let AddTodo = ({ dispatch }) => {
    let input
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            dispatch(addTodo(input.value))
            input.value = ''
          }}
        >
          <input
            ref={node => {
              input = node
            }}
          />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }
  AddTodo = connect()(AddTodo)

  const App = () => (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )

  let store = createStore(todoApp);


  



  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
  