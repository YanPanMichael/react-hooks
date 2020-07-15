import React, {useEffect, useState} from 'react';

import { EventEmitter } from 'fbemitter';

const emitter = new EventEmitter();
window.emitter = emitter;
const EventName = 'EVENT_NAME';

const CounterReset = () => {
  const [count, setCount] = useState(c => c = 0);
  useEffect(() => {
    const handler = () => {
      setCount(0);
    }
    emitter.addListener(EventName, handler);
    return () => {
      emitter.removeAllListeners(EventName);
    }
  }, []);
  return (
    <div>
      <div className="desc-list" onClick={() => setCount(c => c + 1)}>
        计数 {count} ; 点击后递增
      </div>
      <div className="desc-list" onClick={() => emitter.emit(EventName)}>
        点击后重置
      </div>
    </div>
  )
};

export default CounterReset;