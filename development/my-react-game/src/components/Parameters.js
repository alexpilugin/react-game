import React from 'react';
import ProgressBar from './ProgressBar';

import './style/Parameters.css';

class Parameters extends React.Component {
  render() {
    const bars = Object.entries(this.props.params).map(([key,value]) => {
      return (
        <ProgressBar 
          key={key}
          property={key} 
          value={Number(value)} />  
      )
    });
    return (
      <div className="Parameters">
        {bars}
      </div>
    );
  }
}

export default Parameters;
