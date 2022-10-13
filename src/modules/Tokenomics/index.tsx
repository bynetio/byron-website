import React from 'react';
import { DividerIcon, CheckIcon, ChartIcon, FullChartIcon } from 'assets';
import './tokenomics.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Q1 from './Q1';
import Q2 from './Q2';
import Q3 from './Q3';
import { CustomDot } from './CustomDot';

const Tokenomics = () => {
  return (
    <section
      id="development"
      className="bg-gradient-to-r from-[#0C1427] to-[#0E192F] pt-24 lg:pt-48">
      <h1 className="text-[#C9D6ED] text-center pb-12 lg:pb-20 text-2xl lg:text-5xl font-['Mulish']">
        Bynet Protocol&apos;s development
      </h1>

      <div className="flex lg:hidden flex-col-reverse w-full mb-8 lg:mb-24 max-w-7xl">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="w-full"
          customDot={<CustomDot />}
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside
          renderDotsOutside
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 40
            }
          }}
          rtl={false}
          rewind={false}
          rewindWithAnimation={false}
          shouldResetAutoplay
          showDots={true}
          slidesToSlide={1}
          swipeable>
          <Q1 title="Phase 1" />
          <Q2 title="Phase 2" />
          <Q3 title="Phase 3" />
        </Carousel>
      </div>

      <div className="hidden lg:block">
        <div className="flex justify-center items-center">
          <div className="card">
            <ul className="text-white">
              <li className="py-3">
                <CheckIcon className="inline h-[24px] mr-6" />
                DApps-oriented
              </li>
              <li className="py-3">
                Delivering a set of functionality-packed DApps that respond to the community&apos;s
                needs.
              </li>
            </ul>
          </div>
          <div>
            <div className="divider h-full"></div>
            <DividerIcon className="h-[44px] mx-auto" />
            <div className="divider"></div>
          </div>
          <div className="pl-[20px] pr-[318]">
            <span className="timeline text-white">Phase 1</span>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="pr-[20px] pl-[318]">
            <span className="timeline text-white">Phase 2</span>
          </div>
          <div>
            <div className="divider h-full"></div>
            <DividerIcon className="h-[44px] mx-auto" />
            <div className="divider"></div>
          </div>
          <div className="card">
            <ul className="text-white">
              <li className="py-3">
                <CheckIcon className="inline h-[24px] mr-6" />
                Tools-oriented
              </li>
              <li className="py-3">
                Providing innovators and builders with tools to lower technological entry barriers
                to Cardano.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="card">
            <ul className="text-white">
              <li className="py-3">
                <CheckIcon className="inline h-[24px] mr-6" />
                Adoption-oriented
              </li>
              <li className="py-3">
                Facilitating Cardano education and driving DeFi adoption with mission-led approach.
              </li>
            </ul>
          </div>
          <div>
            <div className="divider h-full"></div>
            <DividerIcon className="h-[44px] mx-auto" />
            <div className="divider"></div>
          </div>
          <div className="pl-[20px] pr-[318]">
            <span className="timeline text-white">Phase 3</span>
          </div>
        </div>
      </div>
      <div id="tokenomics" className="w-full">
        <h1 className="text-[#C9D6ED] text-center pt-20 lg:pt-48 pb-16 lg:pb-20 text-2xl lg:text-5xl font-['Mulish']">
          Tokenomics
        </h1>
        <div className="tokenomics flex justify-center flex-wrap">
          <div className="justify-self-center basis-full lg:hidden">
            <FullChartIcon className="mx-auto" />
          </div>
          <ul className="px-[40px]">
            <li className="text-white flex justify-between">
              Public Distribution <span className="text-[#3742F5]">60%</span>
            </li>
            <li className="text-white flex justify-between">
              Marketing & Ekosystem <span className="text-[#3742F5]">10.5%</span>
            </li>
            <li className="text-white flex justify-between">
              Treasury <span className="text-[#3742F5]">10.0%</span>
            </li>
            <li className="text-white flex justify-between">
              Team & Advisors <span className="text-[#3742F5]">10.0%</span>
            </li>
            <li className="text-white flex justify-between">
              Airdrop <span className="text-[#3742F5]">0.5%</span>
            </li>
          </ul>
          <ul className="px-[40px]">
            <li className="text-white flex justify-between">
              IDO <span className="text-[#3742F5]">1,5%</span>
            </li>
            <li className="text-white flex justify-between">
              Public Safe<span className="text-[#3742F5]">0.5%</span>
            </li>
            <li className="text-white flex justify-between">
              Private Round<span className="text-[#3742F5]">4.0%</span>
            </li>
            <li className="text-white flex justify-between">
              Strategic Round<span className="text-[#3742F5]">2.0%</span>
            </li>
            <li className="text-white flex justify-between">
              Seed Round<span className="text-[#3742F5]">1.0%</span>
            </li>
          </ul>
          <ChartIcon className="hidden lg:block background-img" />
        </div>
        <div className="w-full text-center pt-24 pb-24 lg:pb-64 mx-0">
          <a
            href="https://docsend.com/view/zzwh7tfis2595mtv"
            className=" text-white border border-indigo-600 rounded-lg py-3 px-7 mx-auto"
            rel="noopener noreferrer"
            target="blank">
            See full tokenomics
          </a>
        </div>
      </div>
      <div
        style={{ borderColor: 'transparent transparent transparent #EFF6FF' }}
        className="w-0 h-0 border-solid relative
          border-t-[100px] border-l-[1600px]
          md:border-l-[100vw] self-center"
      />
    </section>
  );
};

export default Tokenomics;
