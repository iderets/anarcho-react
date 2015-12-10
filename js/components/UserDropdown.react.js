var React = require('react');

var UserDropdown = React.createClass({
  render: function() {
    return (
        <li className="dropdown user user-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <img src="https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                <span className="hidden-xs">Anarcho User</span>
            </a>
            <ul className="dropdown-menu">
                <li className="user-header">
                    <img src="https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                    <p>Anarcho user</p>
                </li>
                <li className="user-footer">
                    <div className="pull-left">
                      <a href="#" className="btn btn-default btn-flat">Profile</a>
                    </div>
                    <div className="pull-right">
                      <a href="#" className="btn btn-default btn-flat">Sign out</a>
                    </div>
                </li>
            </ul>
        </li>
    );}
});

module.exports = UserDropdown;