import React from 'react';
import { Menu, Hero, OurSolutions, OurFounders, Tokenomics, Footer, CardanoNews } from './modules';
import './styles/index.scss';

const App = () => (
  <div className="App">
    <Menu />
    <Hero />
    <OurSolutions />
    <OurFounders />
    <Tokenomics />
    <CardanoNews />
    <Footer />
  </div>
);

export default App;
