var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');

export var TodoSearch = React.createClass({
    render: function() {
        var {dispatch, showCompleted, searchText} = this.props;

        return (
            <div className="form-group container-fluid col-12">
                <div>
                    <input type="search" ref="searchText" placeholder="Search Todos" value={searchText} onChange={() => {
                        var searchText = this.refs.searchText.value;
                        dispatch(actions.setSearchText(searchText));
                    }} className="form-control"/>
                </div>
                <div>
                    <label className="form-check-label ">
                        <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                            dispatch(actions.toggleShowCompleted());
                        }} className="form-check-input"/>
                        Show Completed Todos
                    </label>
                </div>
            </div>
        )
    }
});

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
