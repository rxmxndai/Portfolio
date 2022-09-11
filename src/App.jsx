import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";

import styled from "styled-components";
import "./app.scss"

const Container = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <div className="app">
      <Container>
        <Navbar />

        <div className="sections">
          <Home />
          <About />
          <Skills />
          <Project />
        </div>
      </Container>
    </div>
  );
}

export default App;
