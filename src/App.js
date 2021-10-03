import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact'
import PortfolioList from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav></Nav>
      <About></About>
      <PortfolioList></PortfolioList>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
