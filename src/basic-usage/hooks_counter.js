import React from 'react';

const CounterHooks = props => {
  const [count, setCount] = React.useState(0);

  return (
    <div onClick={() => setCount(count + 1)}>
      {`当前${count}`}
    </div>
  );
};

export default CounterHooks;