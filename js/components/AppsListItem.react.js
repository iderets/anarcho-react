var React = require('react');

var AppsListItem = React.createClass({
  render: function() {
    return (
        <div className="box box-widget widget-user">
            <div className="widget-user-header bg-aqua-active">
              <h3 className="widget-user-username">OneLane Driver <small>1.1</small></h3>
              <h5 className="widget-user-desc">2015-12-07 11:03:35</h5>
            </div>
            <div className="widget-user-image">
              <img className="img-rounded" src="http://anarcho.pp.ciklum.com/api/icon/178ba488-1327-11e5-9bc2-62dd4457b65e" alt="OneLane" />
            </div>
            <div className="box-footer">
              <div className="row">
                <div className="col-sm-4 border-right">
                  <div className="description-block">
                    <h5 className="description-header">12</h5>
                    <span className="description-text">Members</span>
                  </div>
                </div>
                <div className="col-sm-4 border-right">
                  <div className="description-block">
                    <h5 className="description-header">3</h5>
                    <span className="description-text">Versions</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="description-block">
                    <h5 className="description-header">35</h5>
                    <span className="description-text">Builds</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );}
});


module.exports = AppsListItem;