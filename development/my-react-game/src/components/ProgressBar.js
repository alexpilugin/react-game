import React from 'react';

import './style/ProgressBar.css';

class ProgressBar extends React.Component {
  render() {
    return (
      <div className="ProgressBar">
        {this.props.children}
      </div>
    );
  }
}

export default ProgressBar;

