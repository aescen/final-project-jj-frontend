import React, { Component } from 'react';

class ButtonClass extends Component {
  // using props
  render() {
    const { color, value } = this.props;
    return (
      <button style={{ color: color }}>
        {value}
      </button>
    );
  };
};

ButtonClass.defaultProps = {
  value: 'Classy!',
  color: 'orange',
};

export default ButtonClass;