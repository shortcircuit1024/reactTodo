var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the cat'
                }, {
                    id: 2,
                    text: 'Take out trash'
                }, {
                    id: 3,
                    text: 'Take mail to post office'
                }, {
                    id: 4,
                    text: 'Play video games'
                }
            ]
        };
    },
    handleAddTodo: function (todo) {
      todos.push({id: todos.length, text: {todo}});
    },
    render: function() {
      var {todos} = this.state;
        return (
            <div>
              <TodoList todos={todos} />
              <AddTodo newTodos={this.handleAddTodo} />
            </div>
        )
    }
});

module.exports = TodoApp;
