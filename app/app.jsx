var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Short',
  location: 'Texas'
};

var objTwo = {
  age: 26,
  ...objOne
};

console.log(objTwo);

ReactDOM.render(
  <h1>Boilerplate app!</h1>,
  document.getElementById('app')
);
