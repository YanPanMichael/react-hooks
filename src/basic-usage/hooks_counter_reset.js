import React, {useEffect, useState, useRef} from 'react';

// import { EventEmitter } from 'fbemitter';

// const emitter = new EventEmitter();
// window.emitter = emitter;
// const EventName = 'EVENT_NAME';

const CounterReset = () => {
  const [count, setCount] = useState(c => c = 0);
  const ref = useRef();
  if (count > 5) {
    console.log('outer', count);
  }
  useEffect(() => {
    if(count > 5) {
      console.log('inner', count);
      console.log(ref.current.innerText);
      setCount(0);
    }
  }, [count]);
  return (
    <div>
      <div className="desc-list" onClick={() => setCount(c => c + 1)}>
        计数 <span ref={ref}> {count} </span> ; 点击后递增
      </div>
      <div className="desc-list" onClick={() => emitter.emit(EventName)}>
        点击后重置
      </div>
    </div>
  )
};

export default CounterReset;