import React from 'react';
import './style/App.css';
import Player from './Player';

const App = React.createClass({

  getInitialState: function() {
    return {
      currentPlayer: 0,
      players: [{
        'player': 'A',
        'name': 'Warrior',
        'status': 'waiting', //or 'ready'
        parameters: {
          'forces': 100,
          'hit': 5,
          'defense': 5
        }
      },{
        'player': 'B',
        'name': 'Enemy',
        'status': 'waiting', //or 'ready'
        parameters: {
          'forces': 100,
          'hit': 5,
          'defense': 5
        }
      }]
    };
  },
  render() {
     const players = this.state.players.map((item) => {
          return (
            <Player 
                key={item.player}
                id={'player-' + item.player}
                player={item.player}
                name={item.name}
                status={item.status}
                forces={item.forces}
                hit={item.hit}
                defence={item.defense}
                parameters={item.parameters}
            />   
          )
      })
    return (
      <div className="App">
          {players}
      </div>
    )}
})

export default App;
