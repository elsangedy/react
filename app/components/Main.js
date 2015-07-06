var React = require('react'),
    RouteHandler = require('react-router').RouteHandler,
    SearchGithub = require('./SearchGithub');

var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <SearchGithub />
          </div>
        </nav>
        <div className="container">
          <RouteHandler />
        </div>
      </div>
    );
  }
});

module.exports = Main;
