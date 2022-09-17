import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Technologies/Skills";
import Project from "./components/Projects/Project";
import Contacts from "./components/Contacts/Contacts";

import "./app.scss"

function App() {
  return (
    <div className="app">
      <div>
        <Navbar />
        <div className="sections">
          <Home />
          <About />
          <Project />
          <Skills />
          <Contacts />
          
        </div>
      </div>
    </div>
  );
}

export default App;
