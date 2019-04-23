import React from "react";
// import logo from './logo.svg';
import "./App.css";

function App({ char, searchTerm, searchTermChanged }) {
  console.log(searchTermChanged)
  return (
    <section>
      <div id="header">
        <h1>DC Superheroes</h1>
        <h3>A List of Major DC Superhearoes</h3>
      </div>
      <form>
        <div className="search">
          <input
            type="text"
            name="search"
            placeholder="Search"
            value={searchTerm}
            onChange={e => searchTermChanged(e.target.value)}
          />
        </div>
      </form>
      <table>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Name</th>
            <th>Alter Ego</th>
            <th>First Appearance</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {char.map(curChar => (
              <tr key={curChar.name}>
                <td>{curChar.name}</td>
                <td>{curChar.alter_ego}</td>
                <td>{curChar.first_appearance}</td>
                <img
                  src={require(`./images/View/${curChar.name}.png`)}
                  aria-hidden
                  alt={`Super Hero ${curChar.name}`}
                />
              </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default App;
