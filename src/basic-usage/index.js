import React from 'react';

export const Counter = ({count, onClick}) => {
  return (
    <div>
      <div onClick={onClick}>数量：{count}, 点击递增</div>
    </div>
  )
}

class CounterCls extends React.PureComponent {
  state = {
    count: 0,
  }
  
  onPlus = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  render() {
    return (
      <Counter onClick={this.onPlus} count={this.state.count} />
    );
  }
}

export default CounterCls;