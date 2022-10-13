import React from 'react';
import Carousel from 'react-multi-carousel';
import Marquee from 'react-fast-marquee';
import { ProtocolImg, Point, DexImg, WalletImg, CardanoMarketImg } from 'assets';
import GalleryItem from './GalleryItem';
import { CustomDot } from './CustomDot';
import 'react-multi-carousel/lib/styles.css';
import './oursolutions.css';

type GalleryItemtype = {
  title: string;
  description: string;
  image: any;
  url: string;
};

const OurSolutions = () => {
  return (
    <section id="solutions" className="flex flex-col items-center px-6 bg-[#EFF6FF]">
      <div className="h-6 md:h-12 w-full rounded-b-3xl bg-gradient-to-l from-[#DDE8FF] to-transparent mb-12 md:mb-24" />
      <h6 className="text-xs font-bold font-['Mulish'] tracking-[0.3em] bg-clip-text text-transparent bg-gradient-to-b from-[#2B2DFD] to-[#089CFC] mb-9">
        OUR SOLUTIONS
      </h6>
      <p className="font-['Mulish'] text-[#717C90] text-base text-center md:text-lg mb-12 md:mb-20 max-w-xl ">
        With its Bynet ecosystem, Byron Network will serve as a vital hub that diminishes DeFi
        obstacles for all, be it a project or a trader. It is designed to minimize entry barriers
        for all market participants We strive to be the driver for cross-chain innovation.
      </p>
      <h5 className="font-['Mulish'] font-semibold text-xl text-center mb-8">
        Let us help the DeFi world with solutions that benefit from:
      </h5>
      <div className="mb-20 md:mb-40 flex">
        <Marquee className="bg-[#EFF6FF]" gradientColor={[239, 246, 255]} play={true} speed={70}>
          {marqueeTextArray.map((text, index) => (
            <div className="flex justify-center items-center md:w-full mr-7 md:mr-0" key={index}>
              <Point className="mr-7" />
              <p>{text}</p>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="flex flex-col-reverse w-full mb-12 max-w-7xl">
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
          {galleryItems.map(({ title, image, description, url }, index) => (
            <GalleryItem
              key={index}
              title={title}
              imageSrc={image}
              description={description}
              url={url}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

const galleryItems: GalleryItemtype[] = [
  {
    title: 'Bynet Protocol',
    image: ProtocolImg,
    description:
      'Bynet Protocol is a set of Cardano-focused DApps and tools. It is a DeFi scalability solution that aims to empower innovation by lifting technological barriers and bridging liquidity source to other projects.',
    url: 'https://bynet.io/'
  },
  {
    title: 'Bynet DEX',
    image: DexImg,
    description:
      'BynetDEX is an order book DEX that brings a CEX-similar experience to the decentralized world. Advanced order types, such as limit or stop loss orders, create more flexible trading with greater risk control.',
    url: '/'
  },
  {
    title: 'Bynet Wallet',
    image: WalletImg,
    description:
      // eslint-disable-next-line quotes
      "Bynet Wallet is an HD native wallet for the Cardano ecosystem. It incorporates all the functionalities both for novices and advanced Cardano enthusiasts, all within a hand's reach. All that with minimalistic design and intuitive interface.",
    url: 'https://apps.apple.com/us/app/bynet-wallet/id1610555591'
  },
  {
    title: 'Cardano Market',
    image: CardanoMarketImg,
    description:
      'Cardano Market is a Cardano DeFi hub that facilitates easy navigation through a DeFi ecosystem for newbies. Our platform provides an intuitive introduction to Cardano DeFi with projects details, education, news, events, and much more.',
    url: 'https://cardanomarket.io/'
  }
];

const marqueeTextArray = [
  'Shared liquidity',
  'Fast transactions',
  'DEV-friendly API',
  'User Experience-focused'
];

export default OurSolutions;
