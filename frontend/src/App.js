import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Delete from './components/Delete';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/create" component={Create} />
          <Route path="/read" component={Read} />
          <Route path="/update/:id" component={Update} />
          <Route path="/delete/:id" component={Delete} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
