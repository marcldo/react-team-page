import React, { Component } from "react";
import Card from "./components/Card";
import "./App.css";
import team from "./team.json";

class App extends Component {
  // Setting this.state.team to the team json array
  state = {
    team
  };

  // name; title; desc; image

  // Map over this.state.team and render a FriendCard component for each friend object
  render() {
    return (
      <div className="wrapper">
        {this.state.team.map(member => (
          <Card
            id={member.id}
            key={member.id}
            name={member.name}
            image={member.image}
            occupation={member.occupation}
            desc={member.desc}
          />
        ))}
      </div>
    );
  }
}

export default App;
