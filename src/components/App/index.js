import './index.css';
import Scoreboards from '../Scoreboards';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className='centered-div' >
        <h1>Score Board</h1>
        <Scoreboards />
      </div>
    );
  }
}

export default App;
