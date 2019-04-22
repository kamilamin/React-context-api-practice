import React, { Component } from "react";
import Char from "./hero";

const DEFAULT_STATE = {
  allChar: Char,
  searchTheme: ""
};

export const ThemeContext = React.createContext(DEFAULT_STATE);

class Provider extends Component {
  state = DEFAULT_STATE;
  searchThemeChanged = searchTheme => {
    this.setState({
      searchTheme
    });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          searchThemeChanged: this.searchThemeChanged
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default Provider;
