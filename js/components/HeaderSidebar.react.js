var React = require('react');
var UserDropdown = require('./UserDropdown.react');

var HeaderSidebar = React.createClass({
    render: function() {
        return (
            <header className="main-header">
                <a href="#" className="logo">
                    <span className="logo-mini"><b>A</b></span>
                    <span className="logo-lg">Anarcho</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <UserDropdown />
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
});

module.exports = HeaderSidebar;