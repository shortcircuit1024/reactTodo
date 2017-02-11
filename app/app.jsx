var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New State', store.getState());
})

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
