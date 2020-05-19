import React, {Component} from 'react';
import '../styles/App.css'
import '../styles/Main.css'
import '../styles/Profile.css'
import '../styles/TopNavBar.css'

import {TopNavBar} from './TopNavBar';
import {Main} from './Main';

class App extends Component {
  render() {
    return (
        <div className="App">
          <TopNavBar/>
          <Main/>
        </div>
    );
  }
}

export default App;