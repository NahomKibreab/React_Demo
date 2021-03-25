import React, { Component } from "react";
import Table, { TableHeader, TableBody } from "./Table";
import Simple from "./Simple";

class App extends Component {
  render() {
    const characters = [
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
    ];

    return (
      <div className="App">
        {/* <Simple />
        <Table characterData={characters} /> */}
        <table>
          <TableHeader />
          <TableBody characterData={characters} />
        </table>
      </div>
    );
  }
}

export default App;
