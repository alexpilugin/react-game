import React from 'react';
import StatusIndicator from './StatusIndicator';
import Avatar from './Avatar';
import Parameters from './Parameters';
import Actions from './Actions';

import './style/Player.css';

const Player = React.createClass({
  getInitialState: function () {
      return {
        status: this.props.status,
      };
  },
  handleClickActionBtn: function (action) {
    
    //onClickActionBtn( attr );
    this.props.onClickActionBtn({
      player: this.props.player, 
      action: action,
      status: 'ready',
    });
    this.setState({ status: 'ready' }); 
  },
  render() {
    //console.log(this.props.parameters);
    const btnStatus = this.props.status === 'waiting' ? 'enabled' : 'disabled';
    //console.log(btnStatus);
    //console.log(this.props.parameters);
    return (
      <div className="Player">
        <StatusIndicator status={this.props.status}/>
        <h2>Player: {this.props.name}</h2>
        <Avatar player={this.props.player}/>
        <Parameters params={this.props.parameters}/> 
        <Actions 
          player={this.props.player} 
          status={btnStatus}
          onClickActionBtn={this.props.status === 'waiting' ? this.handleClickActionBtn : null}
        />
      </div>
    )}
})

export default Player;