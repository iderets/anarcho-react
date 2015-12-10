var React = require('react');
var AppsListItem = require('./AppsListItem.react');
var HeaderTopnav = require('./HeaderTopnav.react');

var AnarchoApp = React.createClass({

  render: function() {
    return (
      <div className="wrapper">
        <HeaderTopnav />
        <div className="content-wrapper">
            <div className="container">
                <section className="content-header"><h1>Apps List</h1></section>
                <section className="content">
                    <div className="row">
                        <div className="col-md-3"><AppsListItem /></div>
                        <div className="col-md-3"><AppsListItem /></div>
                        <div className="col-md-3"><AppsListItem /></div>
                        <div className="col-md-3"><AppsListItem /></div>
                        <div className="col-md-3"><AppsListItem /></div>
                    </div>
                </section>
            </div>
        </div>
      </div>
    );
  }
});

module.exports = AnarchoApp;