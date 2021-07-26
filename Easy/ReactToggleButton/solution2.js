import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({buttonOn: !this.state.buttonOn});
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.buttonOn?'ON':'OFF'}</button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);