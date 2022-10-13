import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import DiscoverSolutions from './DiscoverSolutions';
import './hero.scss';

const Hero = () => (
  <div className="flex flex-col items-center px-6 md:px-12 hero-bg pb-12  pt-32 md:pt-48">
    <div className="flex flex-col max-w-[1440px]">
      <h1 className="text-center text-4xl md:text-7xl font-bold mb-48 md:mb-32 text-byron-gray whitespace-pre-line leading-loose">
        Building a DeFi ecosystem <br></br> with solutions for
        <TypeAnimation
          className="inline header-gradient"
          cursor={true}
          repeat={Infinity}
          sequence={[
            ' traders',
            3000,
            ' protocols',
            3000,
            ' crypto enthusiast',
            3000,
            ' builders',
            3000
          ]}
          speed={30}
          wrapper="div"
        />
      </h1>
      <DiscoverSolutions />
    </div>
  </div>
);

export default Hero;
