var React = require('react');

var TodoSearch = React.createClass({
  handleSeach: function () {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function () {
    return(
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search Todos" onChange={this.handleSeach}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSeach}/>
            Show Completed Todos
          </label>
        </div>
      </div>
    )
  }
});

module.exports = TodoSearch;
