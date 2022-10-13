import React from 'react';
import Carousel from 'react-multi-carousel';
import ARTICLES from './articlesMock';
import PostTile from './PostTile';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const CardanoNews = () => {
  return (
    <section id="news-feed" className="bg-[#EFF6FF]">
      <h6 className="text-center text-xs font-semibold tracking-[0.3em] bg-clip-text text-transparent bg-gradient-to-t from-[#089CFC] to-[#2B2DFD] mb-5 uppercase">
        Blog
      </h6>
      <h3 className="block font-['Mulish'] text-center text-2xl font-bold mb-11 md:mb-16">
        Dive deeper into our ecosystem
      </h3>
      <div className="flex justify-center pb-24 md:pt-8">
        <br></br>
        <div className="w-full max-w-[1440px]">
          <Carousel
            arrows={false}
            autoPlay
            autoPlaySpeed={5000}
            containerClass="w-full"
            infinite
            removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
            responsive={responsive}
            showDots
            swipeable
            transitionDuration={1000}
            renderDotsOutside
            dotListClass="!justify-center">
            {ARTICLES.map(({ title, img, link }, index) => {
              return <PostTile key={index} title={title} imageUrl={img} link={link} />;
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CardanoNews;
