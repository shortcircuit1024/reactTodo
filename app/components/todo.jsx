var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  render: function () {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div onClick={() => {
          dispatch(actions.startToggleTodo(id, !completed));
        }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p>{renderDate()}</p>
        </div>
      </div>
    )
  }
});

export default connect()(Todo);
