var React = require('react');

var Todo = React.createClass({
    render: function() {
        var {id, text, completed} = this.props;

        return (
            <div className="list-group-item" onClick={() => {
                this.props.onToggle(id);
            }}>
                <input type="checkbox" checked={completed} className=""/> {text}
            </div>
        )
    }
});

module.exports = Todo;
