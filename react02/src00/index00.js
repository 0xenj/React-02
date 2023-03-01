import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return <Today date={Date()} />;
  }
}

class Today extends React.Component {
  render() {
    return <p>Today is {this.props.date}</p>;
  }
}

const element = <App />;
ReactDOM.render(element, document.getElementById("root"));
