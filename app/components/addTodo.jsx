var React = require('react');

var AddTodo = React.createClass({
  onFormSubmit: function (e){
    e.preventDefault();

    var newTodo = this.refs.addTodo.value;
    if(newTodo.length > 0){
      this.props.newTodos(newTodo);
      this.refs.addTodo.value = '';
    }
  },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="addTodo" placeholder="What would you like to do?"/>
                    <br/>
                    <button className="btn btn-primary">Add Todo</button>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;
