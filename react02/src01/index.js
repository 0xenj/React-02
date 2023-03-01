import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <ul>
        <Client gender="male" firstname="Tony" lastname="Stark" />
        <Client gender="female" firstname="Natasha" lastname="Romanoff" />
      </ul>
    );
  }
}

class Client extends React.Component {
  render() {
    let title;
    if (this.props.gender === "male") {
      title = "Mr";
    } else {
      title = "Mme";
    }
    return (
      <li>
        {title} {this.props.firstname} {this.props.lastname}
      </li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
