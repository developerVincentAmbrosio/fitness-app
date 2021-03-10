import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';
import Tracker from './components/Tracker';

function App() {
  return (
    <main className='App'>
      <Route exact path='/' component={Landing} />
      <Route path='/tracker' component={Tracker} />
    </main>
  );
}

export default App;