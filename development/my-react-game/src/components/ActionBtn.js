import React from 'react';

import './style/ActionBtn.css';

const ActionBtn = React.createClass({
  propTypes: {
    onClickBtn: React.PropTypes.func.isRequired
  },
  handleClick: function (){
    if (this.props.status === 'disabled') {return false;}
    const action = {
      'id': this.props.id,
      'forces': this.props.forces,
      'hit': this.props.hit,
      'defense': this.props.defense,  
    }
    this.props.onClickBtn(action);
    this.setState({ clicked: true});
  },
  getInitialState: function () {
      return {
        clicked: false,
      };
  },
  render() {
    var classNameClicked = this.state.clicked ? 'btnClicked' : 'btnNotClicked';
    var classNameDisabled = this.props.status === 'enabled' ? '' : 'btnDisabled';
      return (
        <div className={'ActionBtn ' + classNameClicked + ' ' + classNameDisabled}
        id={this.props.id} 
        onClick={this.props.status === 'disabled' ? null : this.handleClick}>
          <div className="action-pic"></div>
          <div className="description">
            <p>Forces: {this.props.forces}</p>
            <p>Hit: {this.props.hit}</p>
            <p>Defense: {this.props.defense}</p>
          </div>
        </div>
      )
  }
})

export default ActionBtn;