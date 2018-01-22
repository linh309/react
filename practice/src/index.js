import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import todoApp from './reducers';

//Import function
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions';

let store = createStore(todoApp);

const unsubcribe = store.subscribe(()=> {
    console.log(store.getState());
}) ;

//Dispatch action
store.dispatch(addTodo('learn about action 1'));
store.dispatch(addTodo('learn about action 2'));
store.dispatch(toggleTodo(1));
store.dispatch(addTodo('learn about action 3'));