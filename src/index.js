import '@babel/polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CounterCls from './basic-usage/counter';      
import CounterHooks from './basic-usage/hooks_counter';
import { ConfigContext, config } from './util';

const { Provider } = ConfigContext;

const App = () => {
  const [color, setColor] = useState(config.marriage);
    return (
      <Provider value={color}>
        <div>
          <CounterCls />
          <CounterHooks />
        </div>
        <div onClick={() => setColor(pre => pre === pre)}></div>
      </Provider>
    );

}

ReactDOM.render(<App />, document.getElementById('root'));