import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Notes from './components/Notes'
import CreatNotes from './components/CreateNote'

import {BrowserRouter as Router,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <Navbar/>
    <Route path="/" exact>
    <Homepage/>
    </Route>
    <Route path="/notes">
      <Notes/>

    </Route>

    <Route path="/create">
      <CreatNotes/>
    </Route>

    </Router>
  );
}

export default App;
