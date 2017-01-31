var React = require('react');

var TodoSearch = React.createClass({
  handleSeach: function () {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function () {
    return(
      <div className="form-group container-fluid col-12">
        <div>
          <input type="search" ref="searchText" placeholder="Search Todos" onChange={this.handleSeach} className="form-control"/>
        </div>
        <div>
          <label className="form-check-label ">
            <input type="checkbox" ref="showCompleted" onChange={this.handleSeach} className="form-check-input"/>
            Show Completed Todos
          </label>
        </div>
      </div>
    )
  }
});

module.exports = TodoSearch;
