import React, {
  useState,
  useContext,
  useEffect,
  useMemo,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { ConfigContext } from '../util';

// import { EventEmitter } from 'fbemitter'

// const emitter = new EventEmitter();
// window.emitter = emitter;
// const EVENT_NAME = 'EVENT_NAME';

export default forwardRef((_, ref) => {
  const config = useContext(ConfigContext)
  const [count, setCount] = useState(0);
  const onClickCountPlus = useRef(() => setCount(count + 1));
  const memoValue = useMemo(() => count * 2, [count]);
  useEffect(() => {
    onClickCountPlus.current = () => setCount(count + 1);
  }, [count])
  useImperativeHandle(ref, () => ({
    plusCount: () => {
      setCount(c => c + 1);
    }
  }))
  return (
    <div>
      <div>
        color: {config.color}
      </div>
      <div className="desc-list" onClick={() => onClickCountPlus.current()}>
         计数 <span>{count}</span>; 点击后递增
      </div>
      <div className="desc-list">
        计数两倍后为{memoValue}
      </div>
    </div>
  )
});
