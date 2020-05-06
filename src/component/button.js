import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "block"
    };
  }

  Button() {
    if (this.state.display === "block") {
      this.setState({
        display: "none"
      });
      return (document.getElementById("msg").style.display = "none");
    } else {
      this.setState({
        display: "block"
      });
      return (document.getElementById("msg").style.display = "block");
    }
  }

  render() {
    return (
      <div>
        <button id="toggleMsgBtn" onClick={() => this.Button()}>
          Click me
        </button>
        <div id="msg">You are amazing :v</div>
      </div>
    );
  }
}

export default Button;
