var React = require('react');
var {connect} = require('react-redux');

import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
    render: function() {
        var {todos, showCompleted, searchText} = this.props;
        var renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="col-xs-12 text-center" style={{
                        margin: 'auto'
                    }}>Nothing to do...</p>
                );
            }
            return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
                return (<Todo key={todo.id} {...todo}/>);
            });
        };
        return (
            <div className="col-12 border-1">{renderTodos()}</div>
        )
    }
});

export default connect((state) => {
    return state;
})(TodoList);
