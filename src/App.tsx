import React from 'react';
import './App.css';
import logo from './logo.svg';
import InfoSection from './components/InfoSection';

const App: React.FC = () => {
  return (
    <div>
      <InfoSection logo={logo} />
    </div>
  );
}

export default App;
