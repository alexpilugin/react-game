import React from 'react';
import StatusIndicator from './StatusIndicator';
import Avatar from './Avatar';
import Parameters from './Parameters';
import Actions from './Actions';

import './style/Player.css';

class Player extends React.Component {
  render() {
    return (
      <div className="Player">
        <StatusIndicator />
        <h2>Player {this.props.name}</h2>
        <Avatar />
        <Parameters />
        <Actions />
      </div>
    );
  }
}

export default Player;