import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';
import Tracker from './components/Tracker';
import Finish from './components/Finish';

const App = () => {
  return (
    <main className='App'>
      <Route exact path='/' component={Landing} />
      <Route path='/tracker' component={Tracker} />
      <Route path='/finish' component={Finish} />
    </main>
  );
}

export default App;