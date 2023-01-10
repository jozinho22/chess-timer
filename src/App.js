import React from 'react';
import AppManager from './components/AppManager';
import getGameTypes from './components/content/getGameTypes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/Commons.css'

function App() {

  const [gameTypes, setGameTypes] = React.useState(getGameTypes());
  const [user, setUser] = React.useState({});


  return (
      <div className="App">
          <AppManager user={user} setUser={setUser} gameTypes={gameTypes} setGameTypes={setGameTypes}/>
      </div>
  );
}

export default App;
