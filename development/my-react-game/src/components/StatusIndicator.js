import React from 'react';

import './style/StatusIndicator.css';

class StatusIndicator extends React.Component {
  render() {
    return (
      <div className="StatusIndicator">
        Status: {this.props.status}
      </div>
    );
  }
}

export default StatusIndicator;