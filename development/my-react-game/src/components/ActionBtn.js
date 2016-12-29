import React from 'react';

import './style/ActionBtn.css';

class ActionBtn extends React.Component {
  render() {
    return (
      <div className="ActionBtn" id={this.props.id} >
        <div className="action-pic"></div>
        <div className="description">
          <p>Forces: {this.props.forces}</p>
          <p>Hit: {this.props.hit}</p>
          <p>Defense: {this.props.defense}</p>
        </div>
      </div>
    );
  }
}

export default ActionBtn;