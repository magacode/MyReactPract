import React from 'react';

const Counter = ({ counter, dec, inc, rnd }) => {
  return (
    <div className="wrap">
      <div className="counter">{counter}</div>
      <button className="btn" onClick={inc}>INC</button>
      <button className="btn" onClick={dec}>DEC</button>
      <button className="btn" onClick={rnd}>RND</button>
    </div>
  );
}

export default Counter;