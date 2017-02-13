var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux')
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');
var TodoAPI = require('TodoAPI');
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  var state = store.getState();
    console.log('New State', store.getState());
    TodoAPI.setTodos(state.todos);
})

var intialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(intialTodos));

ReactDOM.render(
    <Provider store={store}><TodoApp/></Provider>, document.getElementById('app'));
