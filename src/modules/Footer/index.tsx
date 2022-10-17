import React from 'react';
import { ByronLogo } from 'components';
import { TwitterIcon, DiscordIcon, TelegramIcon, GithubIcon } from 'assets';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="font-['Mulish']">
      <div className="text-[14px] lg:hidden mx-6 m-10">
        <div className="flex justify-between">
          <ul className="w-1/2">
            <li className="py-2">
              <a href="/" className="font-bold mr-4 pointer-events-none cursor-default">
                Privacy Policy
              </a>
            </li>
            <li className="py-2">
              <a href="/" className="font-bold mr-4 pointer-events-none cursor-default">
                Terms &amp; Conditions
              </a>
            </li>
            <li className="py-2 text-[#949FAB]">
              <hr className="w-1/4" />
            </li>
            <li className="py-2">
              <a href="https://binarapps.com/" className="mr-4 text-[#1566E1]" target="blank">
                BinarApps
              </a>
            </li>
            <li className="py-2">
              <a href="https://iog.io/" className="mr-4 text-[#1566E1]" target="blank">
                IOG
              </a>
            </li>
          </ul>
          <ByronLogo color="black" />
        </div>
        <div className="flex">
          <div className="mr-4 text-[#949FAB] pt-4">
            Copyright@ 2022 Byron Network OU. All rights reserved.
          </div>
          <p>
            <a
              href="https://twitter.com/ByronNetworkOU"
              aria-label="Visit our Twitter page"
              target="blank">
              <TwitterIcon className="mr-4 max-h-8" />
            </a>
            <a
              href="https://github.com/byron-network/"
              aria-label="Visit our Github"
              target="blank">
              <GithubIcon className="mr-4 max-h-8" />
            </a>
          </p>
          <p>
            <a
              href="https://discord.com/invite/rRFyDS3q"
              aria-label="Join our Discord group"
              target="blank">
              <DiscordIcon className="mr-4 max-h-8" />
            </a>
            <a
              href="https://t.me/byron_network"
              aria-label="Join our Telegram group"
              target="blank">
              <TelegramIcon className="mr-4 max-h-8" />
            </a>
          </p>
        </div>
      </div>

      <div className="hidden md:px-24 xlg:px-48 py-14 lg:max-h-[170px] lg:flex flex-wrap justify-between items-center">
        <ByronLogo color="black" />
        <div className="pr-96">
          <ul className="flex">
            <li>
              <a href="/" className="font-bold mr-4 pointer-events-none cursor-default">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="font-bold mr-4 pointer-events-none cursor-default">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <span className="mr-4 text-grey">|</span>
            </li>
            <li>
              <a
                href="https://binarapps.com/"
                className="mr-4 text-[#1566E1] font-bold"
                target="blank">
                BinarApps
              </a>
            </li>
            <li>
              <a href="https://iog.io/" className="mr-4 text-[#1566E1] font-bold" target="blank">
                IOG
              </a>
            </li>
          </ul>
          <div className="mr-4 text-[#949FAB]">
            Copyright@ 2022 Byron Network OU. All rights reserved.
          </div>
        </div>
        <div className="flex">
          <a href="https://twitter.com/ByronNetworkOU" target="blank">
            <TwitterIcon className="mr-4" />
          </a>
          <a href="https://github.com/byron-network/" target="blank">
            <GithubIcon className="mr-4" />
          </a>
          <a href="https://discord.com/invite/rRFyDS3q" target="blank">
            <DiscordIcon className="mr-4" />
          </a>
          <a href="https://t.me/byron_network" target="blank">
            <TelegramIcon className="mr-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
