var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');

export var AddTodo = React.createClass({
  onFormSubmit: function (e){
    e.preventDefault();
    var newTodo = this.refs.addTodo.value;
    var {dispatch} = this.props;

    if(newTodo.length > 0){
      // this.props.newTodos(newTodo);
      dispatch(actions.startAddTodo(newTodo));
      this.refs.addTodo.value = '';
    } else {
      this.refs.addTodo.focus();
    }
  },
    render: function() {
        return (
            <div>
                <form className="form-group container-fluid col-12" onSubmit={this.onFormSubmit}>
                    <input type="text" ref="addTodo" placeholder="What would you like to do?" className="form-control"/>
                    <br/>
                    <button className="btn btn-primary form-control">Add Todo</button>
                </form>
            </div>
        )
    }
});

export default connect()(AddTodo);
