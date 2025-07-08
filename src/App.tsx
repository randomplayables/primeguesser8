import React from 'react';
import GameBoard from './components/GameBoard';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1>Prime Number Guessing Game</h1>
      </header>
      <main>
        <GameBoard />
      </main>
    </div>
  );
};

export default App;