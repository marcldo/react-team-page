import React, { Component } from "react";
import Card from "./components/Card";
import "./App.css";
import team from "./team.json";

class App extends Component {

  state = {
    team
  };

  render() {
    return (
      <>
        <nav>
          <div className="logo-container">
            <img alt="acuity logo" src="https://www.acuityads.com/wp-content/themes/acuity-theme/imgs/acuity_logo.svg"></img>
          </div>
        </nav>
        <div className="team-container">
          <div className="overview">
            <h3> Our Team</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium quia autem repellat optio quo nulla, mollitia non, magni explicabo itaque,
              laudantium delectus! Enim, assumenda voluptates! Dolor iste tempora est dicta nisi, architecto assumenda
              libero consectetur perspiciatis eveniet vel maiores autem. Accusamus, eveniet consectetur minima ipsum
            dicta nobis provident nisi nostrum.</p>
          </div>

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
        </div>
        <footer>
          <div className="footer-text">
            <p>© 2019 AcuityAds. All rights reserved.</p>
          </div>
        </footer>
      </>
    );
  }
}

export default App;
