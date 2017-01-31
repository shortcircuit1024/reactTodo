var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        };
    },
    componentDidUpdate: function () {
      TodoAPI.setTodos(this.state.todos);
    },
    handleAddTodo: function(text) {
        // todos.push({id: todos.length, text: {todo}});
        this.setState({
            todos: [
                ...this.state.todos, {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        });
    },
    handleSeach: function(showCompleted, searchText) {
        this.setState({showCompleted: showCompleted, searchText: searchText.toLowerCase()});
    },
    handleToggle: function(id) {
        var updatedtodos = this.state.todos.map((todo) => {
          if(todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        });
        this.setState({todos: updatedtodos})
    },
    render: function() {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return (
            <div className="row " style={{
                marginTop: '20%'
            }}>
                <div className="col-6 offset-3 card rounded-10">
                    <h2 className="display-2 text-center">Todo App</h2>
                    <span className="container-fluid row"><TodoSearch onSearch={this.handleSeach}/></span>
                    <span className="list-group" style={{
                        marginBottom: '7%'
                    }}><TodoList className="listgroup" todos={filteredTodos} onToggle={this.handleToggle}/></span>
                    <AddTodo className="container-fluid row" newTodos={this.handleAddTodo}/>
                </div>
            </div>
        )
    }
});

module.exports = TodoApp;
