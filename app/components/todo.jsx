var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function() {
        var {id, text, completed, createdAt, completedAt} = this.props;

        var renderDate = () => {
          var message = 'Created ';
          var timestamp = createdAt;
          if(completed){
            message = 'Completed ';
            timestamp = completedAt;
          }
          return message + moment.unix(timestamp).format('MMM Do YYYY @ hh:mm a')
        };

        return (
            <div className="list-group-item" onClick={() => {
                this.props.onToggle(id);
            }}>
                <span className="row"><input type="checkbox" checked={completed} className="col-xs-1" style={{margin: 'auto'}}/>
                <span className="col-xs-11 row"><p className="col-xs-10 offset-1" style={{marginTop: '0%', marginBottom: '0%'}}>{text}</p>
              <p className="col-xs-10 offset-1 text-muted" style={{marginTop: '0%', marginBottom: '0%'}}>{renderDate()}</p></span></span>
            </div>
        )
    }
});

module.exports = Todo;
