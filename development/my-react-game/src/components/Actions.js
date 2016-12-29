import React from 'react';
import ActionBtn from './ActionBtn';
import RundomActionBtn from './RundomActionBtn';

import './style/Actions.css';

class Actions extends React.Component {
  render() {
    return (
      <div className="Actions">
        <h3>Actions</h3>
        <ActionBtn />
        <ActionBtn />
        <ActionBtn />
        <ActionBtn />
        <ActionBtn />
        <RundomActionBtn />
      </div>
    );
  }
}

export default Actions;