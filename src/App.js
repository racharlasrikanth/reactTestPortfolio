import React from "react";
//Global styles
import GlobalStyle from "./components/GlobalStyle";
//Importing Pages
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <AboutUs />
      <GlobalStyle />
    </div>
  );
}

export default App;
