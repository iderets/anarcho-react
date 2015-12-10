var React = require('react');
var UserDropdown = require('./UserDropdown.react');

var HeaderTopnav = React.createClass({
    render: function() {
        return (
            <header className="main-header">
                <nav className="navbar navbar-static-top">
                    <div className="container">
                        <div className="navbar-header">
                          <span className="navbar-brand"><b>Anarcho</b></span>
                        </div>
                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">
                                <UserDropdown />
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
});

module.exports = HeaderTopnav;