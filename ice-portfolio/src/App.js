import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="f-heading">
        <h1>About me</h1>
        <p>Email: cihedimbu@yahoo.com</p>
      </div>
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
