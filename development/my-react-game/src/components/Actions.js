import React from 'react';
import ActionBtn from './ActionBtn';
import RundomActionBtn from './RundomActionBtn';

import './style/Actions.css';

const Actions = React.createClass({
    getInitialState: function() {
        return {
          actions: [{
            'action': 'A',
            'forces': -5,
            'hit': 35,
            'defense': 75
            },{
            'action': 'B',
            'forces': -10,
            'hit': 80,
            'defense': 30
            },{
            'action': 'C',
            'forces': -5,
            'hit': 15,
            'defense': 100
            },{
            'action': 'D',
            'forces': -15,
            'hit': 80,
            'defense': 50
            },{
            'action': 'E',
            'forces': +30,
            'hit': 0,
            'defense': 0
            }]
        }
    },

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
    )}
})

export default Actions;