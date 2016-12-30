import React from 'react';
import StatusIndicator from './StatusIndicator';
import Avatar from './Avatar';
import Parameters from './Parameters';
import Actions from './Actions';

import './style/Player.css';

const Player = React.createClass({
  render() {
    console.log(this.props.parameters);
    return (
      <div className="Player">
        <StatusIndicator status={this.props.status}/>
        <h2>Player: {this.props.name}</h2>
        <Avatar player={this.props.player}/>
        <Parameters params={this.props.parameters}/> 
        <Actions />
      </div>
    )}
})

export default Player;