import React from 'react';

import './style/ProgressBar.css';

class ProgressBar extends React.Component {
  render() {
    return (
        <label className="ProgressBarLabel">{this.props.property}: {this.props.value} 
            <div className="ProgressBar">
                <span style={{width: this.props.value +'%'}}></span>
            </div>
      </label>
    );
  }
}

export default ProgressBar;
