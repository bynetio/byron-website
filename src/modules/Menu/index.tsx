import React, { useState } from 'react';
import { ByronLogo } from 'components';
import './menu.scss';

const Menu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav>
      <div className="flex items-center justify-between py-2.5  bg-gradient-to-r from-[#0C1427] to-[#0E192F] px-6 md:px-24 xlg:px-48">
        <a href="#" className="flex items-center">
          <ByronLogo color="white" className="mr-3 h-6 sm:h-9" />
        </a>
        <nav>
          <section className="mobile-menu flex lg:hidden">
            <div
              className="hamburger-icon space-y-[6px] px-2 py-6"
              onClick={() => setIsNavOpen((prev) => !prev)}>
              <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
              <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
              <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
            </div>

            <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
              <div className="absolute top-0 right-0 px-6 py-6" onClick={() => setIsNavOpen(false)}>
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="mobile-menu flex flex-col items-center pt-[150px]">
                <li className="my-7 text-3xl">
                  <a href="#" className="text-white">
                    Home
                  </a>
                </li>
                <li className="my-7">
                  <a href="#solutions" className="text-white text-3xl">
                    Solutions
                  </a>
                </li>
                <li className="my-7">
                  <a href="#development" className="text-white text-3xl">
                    Development
                  </a>
                </li>
                <li className="my-7">
                  <a href="#tokenomics" className="text-white text-3xl">
                    Tokenomics
                  </a>
                </li>
              </ul>
              <div className="bg-gradient-to-r from-[#0C1427] to-[#0E192F] px-6 w-full">
                <a
                  href="mailto:contact@byron.network"
                  className="text-white text-center block text-3xl bg-gradient-to-r from-[#2C2EFE] to-[#0A97FD] hover:bg-gradient-to-r hover:from-[#0A97FD] hover:to-[#2C2EFE] px-auto py-3 rounded-lg mx-3 mb-24"
                  rel="noopener noreferrer"
                  target="blank">
                  Contact
                </a>
              </div>
            </div>
          </section>

          <ul className="desktop-menu hidden space-x-8 lg:flex">
            <li>
              <a href="#" className="text-white hover-underline-animation ">
                Home
              </a>
            </li>
            <li>
              <a href="#solutions" className="text-white hover-underline-animation">
                Solutions
              </a>
            </li>
            <li>
              <a href="#development" className="text-white hover-underline-animation">
                Development
              </a>
            </li>
            <li>
              <a href="#tokenomics" className="text-white hover-underline-animation">
                Tokenomics
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@byron.network"
                className="text-white bg-gradient-to-r from-[#2C2EFE] to-[#0A97FD] hover:bg-gradient-to-r hover:from-[#0A97FD] hover:to-[#2C2EFE] px-[20px] py-3 rounded-lg"
                rel="noopener noreferrer"
                target="blank">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Menu;
