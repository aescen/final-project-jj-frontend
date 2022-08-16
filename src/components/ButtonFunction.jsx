import React from 'react';

const ButtonFunction = ({ value, color }) => { // using destructuring
  return (
    <button style={{ color: color }}>
      {value}
    </button>
  );
};

ButtonFunction.defaultProps = {
  value: 'Funny!',
  color: 'purple',
};

export default ButtonFunction;