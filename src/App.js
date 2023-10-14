import React, { Component } from 'react';
import './App.css'; // Create a CSS file for styling

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: '0',
    };
  }

  handleButtonClick = (value) => {
    if (value === '=') {
      try {
        this.setState({ display: eval(this.state.display) });
      } catch (error) {
        this.setState({ display: 'Error' });
      }
    } else if (value === 'C') {
      this.setState({ display: '0' });
    } else if (value === 'B') {
      this.setState({
        display: this.state.display.slice(0, -1),
      });
    } else {
      this.setState({
        display:
          this.state.display === '0' ? value : this.state.display + value,
      });
    }
  };

  renderButton(value) {
    return (
      <button key={value} onClick={() => this.handleButtonClick(value)}>
        {value}
      </button>
    );
  }

  render() {
    const buttons = [
      '7', '8', '9', '/',
      '4', '5', '6', 'x',
      '1', '2', '3', '-',
      '0', '.', '=', '+',
      'C', 'B'
    ];

    return (
      <div className="calculator">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          {buttons.map((button) => this.renderButton(button))}
        </div>
      </div>
    );
  }
}

export default Calculator;
