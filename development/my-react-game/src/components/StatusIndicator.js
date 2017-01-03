import React from 'react';

import './style/StatusIndicator.css';

const StatusIndicator = React.createClass({
  render() {
    return (
      <div className="StatusIndicator">
        Status: {this.props.status}
      </div>
    );
  }
})

export default StatusIndicator;