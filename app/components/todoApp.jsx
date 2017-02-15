var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
    render: function() {
        return (
            <div className="row " style={{
                marginTop: '20%'
            }}>
                <div className="col-6 offset-3 card border-1">
                    <h2 className="display-2 text-center">Todo App</h2>
                    <span className="container-fluid row rounded-10"><TodoSearch/></span>
                    <span className="list-group" style={{
                        marginBottom: '7%'
                    }}><TodoList className="listgroup"/></span>
                    <AddTodo className="container-fluid row"/>
                </div>
            </div>
        )
    }
});

module.exports = TodoApp;
