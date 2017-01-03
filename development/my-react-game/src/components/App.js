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
  handleClickActionBtn: function (attr){
    /*
    //https://coderwall.com/p/kvzbpa/don-t-use-array-foreach-use-for-instead
    //array.forEach 95% slower than for(): //http://jsperf.com/fast-array-foreach
    const len = this.state.players.length;
    var bothReaady = false;
    for (var i = 0; i < len; i++) {
      const player = this.state.players[i];

    }
    */
    var bothReady = true;
    
    this.setState({
      players: this.state.players.map((pl) => {
        if(pl.player === attr.player) {
          //console.log(pl)
        pl.status = attr.status;
        var parameters = pl.parameters;
        parameters.hit = attr.action.hit;
        parameters.defense = attr.action.defense;
        parameters.forces += attr.action.forces;

        if (attr.action.forces > 0) {parameters.forces +=  attr.action.forces;}
        if(parameters.forces > 100) parameters.forces = 100;
        if(parameters.hit > 100) parameters.hit = 100;
        if(parameters.defense > 100) parameters.defense = 100;

          return Object.assign({}, pl);
        } else {
            if(pl.status !== 'ready') bothReady = false; 
            return pl;
        }
      })
    }); 
    if(bothReady){this.fight();}
  },
  fight: function(){
    var playersMutate = this.state.players;

    const forcesA = playersMutate[0].parameters.forces;
    const forcesB = playersMutate[1].parameters.forces;
    
    const playerA = playersMutate[0].parameters;
    const playerB = playersMutate[1].parameters;

    const deltahitA = playerB.hit - playerA.defense;
    if (deltahitA > 0 ){ playersMutate[0].parameters.forces = forcesA - deltahitA; }

    const deltahitB = playerA.hit - playerB.defense;
    if (deltahitB > 0 ){ playersMutate[1].parameters.forces = forcesB - deltahitB; }

    playersMutate[0].parameters.hit = 5;
    playersMutate[0].parameters.defense = 5;
    playersMutate[0].status = 'waiting';


    playersMutate[1].parameters.hit = 5;
    playersMutate[1].parameters.defense = 5;
    playersMutate[1].status = 'waiting';

    this.setState({ players: playersMutate })
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
                onClickActionBtn={this.handleClickActionBtn}
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
