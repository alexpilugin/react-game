import React from 'react';
import './style/Avatar.css';

class Avatar extends React.Component {
  render() {
   var pic;
   if (this.props.player === 'B') { pic = 'avatar-2'}
    else { pic = 'avatar-1'}
    return (
      <div className={'Avatar ' + pic}>
      </div>
    );
  }
}

Avatar.defaultProps = {
  player: 'A'  
}

export default Avatar;