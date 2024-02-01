import React from 'react';
import MainGame from './components/MainGame';
import './styles/App.scss';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <MainGame />
    </div>
  );
};

export default App;
