import React from 'react';
import './style/App.css';
import Player from './Player';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Player name="A" />
          <Player name="B" />
      </div>
    );
  }
}

export default App;
