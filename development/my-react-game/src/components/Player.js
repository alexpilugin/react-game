import React from 'react';
import StatusIndicator from './StatusIndicator';
import Avatar from './Avatar';
import Parameters from './Parameters';
import Actions from './Actions';

import './style/Player.css';

const Player = React.createClass({
  render() {
    return (
      <div className="Player">
        <StatusIndicator />
        <h2>Player {this.props.player}</h2>
        <Avatar player={this.props.player}/>
        <Parameters />
        <Actions />
      </div>
    )}
})

export default Player;