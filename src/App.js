import React, { Component } from 'react';
import './App.css';
import Layout from './components/layout/Layout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <p>Testing.. </p>
        </Layout>
      </div>
    );
  }
}

export default App;
