import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <ul>
        {this.props.people.map((person, index) => (
          <Client
            key={index}
            gender={person.gender}
            firstname={person.firstname}
            lastname={person.lastname}
          />
        ))}
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
        <p>
          {title} {this.props.firstname} {this.props.lastname}
        </p>
      </li>
    );
  }
}

const people = [
  { gender: "male", firstname: "Tony", lastname: "Stark" },
  { gender: "female", firstname: "Natasha", lastname: "Romanoff" },
  { gender: "male", firstname: "Loki", lastname: "of Mischief" },
];

ReactDOM.render(<App people={people} />, document.getElementById("root"));
