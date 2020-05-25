import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CounterCls from './basic-usage';

class App extends Component {
  render() {
    return (
      <div>
        <CounterCls />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));