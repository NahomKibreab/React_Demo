import React, { Component } from "react";
import { TableHeader, TableBody } from "./Table";

class App extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor"
      },
      {
        name: "Mac",
        job: "Bouncer"
      },
      {
        name: "Dee",
        job: "Aspring actress"
      },
      {
        name: "Dennis",
        job: "Bartender"
      }
    ]
  };

  removeCharacter = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <TableHeader />
          <TableBody
            characterData={this.state.characters}
            removeCharacter={this.removeCharacter}
          />
        </div>
      </div>
    );
  }
}

export default App;
