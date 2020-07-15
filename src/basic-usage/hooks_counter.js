import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
  useContext,
} from 'react';
import { ConfigContext } from '../util';

// import { EventEmitter } from 'fbemitter';

// const emitter = new EventEmitter();
// window.emitter = emitter;
// const EventName = 'EVENT_NAME';

const CounterHooks = () => {
  const [count, setCount] = useState(c => c = 0);
  const ref = useRef();
  const memoValue = useMemo(() => count * 2, [count]);
  const onClickCountDesc = useCallback(() => setCount(c => c - 2), [count]);
  const config = useContext(ConfigContext)

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
      <div className="desc-list" onClick={onClickCountDesc}>
        计数 <span> {count} </span> ; 点击后递减2
      </div>
      <div className="desc-list">
        计数两倍后为{memoValue}
      </div>
      <div className="desc-list">
        color: {config.color}
      </div>
    </div>
  )
};

export default CounterHooks;