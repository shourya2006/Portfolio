import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Nav />
        <main>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
