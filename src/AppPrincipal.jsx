import React from 'react';
import Navbar from './nav';
import Section from "./section"
import Main from "./main"
import Footer from "./footer"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Section></Section>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
