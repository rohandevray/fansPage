import React from "react";
import GlobalStyle from "./components/Globalstyles";
import Nav from "./components/nav";
import Center from "./components/Center";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Center />
    </div>
  );
}

export default App;
