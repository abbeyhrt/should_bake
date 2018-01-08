import React, { Component } from 'react';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="App-title">What Should I Bake Today?</h1>
        </header>
        <p className="App-intro">
          To get started, hit Enter or Space for baking inspiration.
        </p>
        <footer>Made with love by Abbey Hart</footer>
        {/* todo: insert social media icons */}
      </div>
    );
  }
}

export default App;
