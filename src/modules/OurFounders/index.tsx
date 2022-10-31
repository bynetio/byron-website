import React from 'react';
import Carousel from 'react-multi-carousel';
import {
  bartekSrc,
  maciejSrc,
  BinarLogo,
  HandleLogo,
  IohkLogo,
  OggamLogo,
  SubpadLogo,
  WeMakeItLogo
} from 'assets';
import GalleryItem from './GalleryItem';
import { useInView } from 'react-intersection-observer';

const OurFounders = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    delay: 500,
    triggerOnce: true
  });
  const { ref: partnersRef, inView: partnersInView } = useInView({
    delay: 500,
    triggerOnce: true
  });

  return (
    <>
      <div
        ref={sectionRef}
        className={`flex flex-col items-start md:items-center pt-12 md:pt-24 px-6 bg-[#EBF2FD] fade-in-section ${
          sectionInView ? 'is-visible' : ''
        }`}>
        <h6 className="text-xs font-semibold tracking-[0.3em] bg-clip-text text-transparent bg-gradient-to-t from-[#089CFC] to-[#2B2DFD] mb-5">
          OUR FOUNDERS
        </h6>
        <h3 className="font-['Mulish'] text-2xl font-bold mb-11 md:mb-16">
          Vision-driven entrepreneurs
        </h3>
        <div className="flex gap-x-6 gap-y-8 flex-wrap">
          {[
            { name: 'Maciej Krasowski', position: 'Co-Founder', imageSrc: maciejSrc },
            { name: 'Bartłomiej Rusiniak', position: 'Co-Founder / CTO / CPO', imageSrc: bartekSrc }
          ].map(({ name, position, imageSrc }, index) => (
            <div key={index} className="flex flex-col items-center w-full md:w-auto">
              <img className="mb-8 w-full md:w-auto" src={imageSrc} alt={name} />
              <h3 className="font-['Mulish'] text-2xl font-bold mb-2">{name}</h3>
              <p className="font-['Mulish'] text-xl">{position}</p>
            </div>
          ))}
        </div>
        <div
          style={{ borderColor: 'transparent transparent transparent #EFF6FF' }}
          className="w-0 h-0 border-solid border-t-[100px] border-r-0 border-b-0 border-l-[1600px] md:border-l-[100vw] self-center"
        />
      </div>
      <div
        ref={partnersRef}
        className={`bg-[#EFF6FF] h-[400px] w-full pt-16 fade-in-section ${
          partnersInView ? 'is-visible' : ''
        }`}>
        <h6 className="text-center text-xs font-semibold tracking-[0.3em] bg-clip-text text-transparent bg-gradient-to-t from-[#089CFC] to-[#2B2DFD] mb-5 uppercase">
          Partners
        </h6>
        <h3 className="font-['Mulish'] text-center text-2xl font-bold mb-11 md:mb-16">
          A growing network of partners
        </h3>
        <div className="lg:px-48">
          <Carousel
            arrows={false}
            autoPlay
            autoPlaySpeed={2000}
            className="py-8 md:pl-12 pl-0"
            containerClass="founders-carousel"
            draggable
            infinite
            keyBoardControl
            responsive={responsive}
            swipeable>
            <GalleryItem component={<BinarLogo />} />
            <GalleryItem component={<IohkLogo />} />
            <GalleryItem component={<OggamLogo />} />
            <GalleryItem component={<WeMakeItLogo />} />
            <GalleryItem component={<HandleLogo />} />
            <GalleryItem component={<SubpadLogo />} />
          </Carousel>
        </div>
      </div>
    </>
  );
};

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1300
    },
    items: 5,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 600,
      min: 0
    },
    items: 1,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1300,
      min: 600
    },
    items: 3,
    partialVisibilityGutter: 30
  }
};

export default OurFounders;
