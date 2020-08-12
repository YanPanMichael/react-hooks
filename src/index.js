import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import CounterCls from './basic-usage/counter';      
import CounterHooks from './basic-usage/hooks_counter';
import UseImperativeHandle from './basic-usage/use_imperative_handle';
import { ConfigContext, config } from './util';

const { Provider } = ConfigContext;

const App = () => {
  const [color, setColor] = React.useState(config.marriage);
  const ref = React.useRef();
  return (
    <Provider value={color}>
      <div>
        <CounterCls />
        <CounterHooks />
        <UseImperativeHandle ref={ref} />
      </div>
      <div onClick={() => setColor(pre => pre === pre)}></div>
      <div onClick={() => ref.current.plusCount()}>
        外层点击也能加1
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));