import React from 'react';
import ProgressBar from './ProgressBar';

import './style/Parameters.css';

const Parameters = React.createClass({
  render() {
    //http://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object
  /*
      //console.log(this.props.params);
      const bars = Object.entries(this.props.params).map(([key,value]) => {
        return (
          <ProgressBar 
            key={key}
            property={key} 
            value={Number(value)} />  
        )
      }); 
  */
      const bars = [];
      Object.keys(this.props.params).forEach(key => {
        const value = this.props.params[key];
        bars.push(
        <ProgressBar 
          key={key}
          property={key} 
          value={Number(value)} />  
        );
      }); 
    return (
      <div className="Parameters">
        {bars}
      </div>
    );
  }
})

export default Parameters;
