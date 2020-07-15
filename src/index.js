import '@babel/polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CounterCls from './basic-usage/counter';      
import CounterHooks from './basic-usage/hooks_counter';
import CounterReset from './basic-usage/hooks_counter_reset';

class App extends Component {
  render() {
    return (
      <div>
        <CounterCls />
        <CounterHooks />
        <CounterReset />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));