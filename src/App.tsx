import React from 'react';
import { ToastContainer } from 'react-toastify';
import MainGame from './components/MainGame';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.scss';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <MainGame />
      <ToastContainer
        position='top-center'
      />
    </div>
  );
};

export default App;
