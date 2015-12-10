var React = require('react');

var SideBar = React.createClass({

  render: function() {
    return (
        <aside className="main-sidebar">
            <section className="sidebar">
                <ul className="sidebar-menu">
                    <li className="header">HEADER</li>
                    <li className="active"><a href="#"><i className="fa fa-mobile"></i> <span>Applications</span></a></li>
                    <li><a href="#"><i className="fa fa-users"></i> <span>Teams</span></a></li>
                </ul>
            </section>
        </aside>
    );}
});

module.exports = SideBar;