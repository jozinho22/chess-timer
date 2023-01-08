import React from 'react';
import AppManager from './components/AppManager';
import getGameTypes from './components/content/getGameTypes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/Commons.css'

function App() {

  var gameTypes = getGameTypes();
  const [user, setUser] = React.useState({});


  return (
      <div className="App">
          <AppManager user={user} setUser={setUser} gameTypes={gameTypes} />
      </div>
  );
}

export default App;
