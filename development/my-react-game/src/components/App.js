import React from 'react';
import './style/App.css';
import Player from './Player';

const App = React.createClass({

  getInitialState: function() {
    return {
      currentPlayer: 0,
      players: [{
        'player': 'A',
        'name': 'human',
        'status': 'waiting', //or 'ready'
        'forces': 100,
        'hit': 0,
        'defense': 0
      },{
        'player': 'B',
        'name': 'monster',
        'status': 'waiting', //or 'ready'
        'forces': 100,
        'hit': 0,
        'defense': 0
      }]
    };
  },
  render() {
    return (
      <div className="App">
          <Player player="A" />
          <Player player="B" />
      </div>
    )}
})

export default App;
