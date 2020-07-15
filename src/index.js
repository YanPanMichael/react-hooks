import '@babel/polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CounterCls from './basic-usage/counter';      
import CounterHooks from './basic-usage/hooks_counter';

class App extends Component {
  render() {
    return (
      <div>
        <CounterCls />
        <CounterHooks />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));