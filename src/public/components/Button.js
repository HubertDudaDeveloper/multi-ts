import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ok = () => 'good';
    const start = {
      list: 'opis',
      type: 'List',
    };
    return (
      <button className='btn btn-dark col-1 p-1'>+</button>
    );
  }
}

export default Button;
