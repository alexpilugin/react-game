import React from 'react';
import ProgressBar from './ProgressBar';

import './style/Parameters.css';

class Parameters extends React.Component {
  render() {
    return (
      <div className="Parameters">
        <h3>Parameters</h3>
        <ProgressBar />
      </div>
    );
  }
}

export default Parameters;