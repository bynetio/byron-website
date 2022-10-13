import React from 'react';
import { ArrowRight } from 'assets';

type Props = {
  title: string;
  imageComponent?: any;
  imageSrc?: string;
  description: string;
};

const GalleryItem = ({ title, description, imageSrc, imageComponent: Image }: Props) => {
  return (
    <div className="flex w-full h-auto flex-wrap md:flex-nowrap lg:px-32 gap-x-8">
      <div className="flex-1">
        <h3 className="text-[22px] font-semibold mb-6">{title}</h3>
        <p className="text-base text-[#717C91] mb-8 font-['Mulish']">{description}</p>
        <button
          className="flex text-left w-full md:w-auto h-12 bg-gradient-to-l from-[#089CFC] to-[#2B2DFD] rounded-lg p-[1px] mb-4"
          onClick={() => alert('klik')}>
          <div className="flex justify-center items-center w-full h-full px-6 rounded-lg bg-[#EFF6FF]">
            <p className="pr-2">Read more</p>
            <ArrowRight />
          </div>
        </button>
      </div>
      <div className="flex-1">
        {imageSrc && (
          <figure className="min-w-[300px] max-w-[600px] w-full h-[400px]">
            <img className="object-contain w-full h-full" src={imageSrc} alt={imageSrc} />
          </figure>
        )}
        {Image && (
          <Image className="min-w-[300px] max-w-[600px] max-h-[340px] max- w-full md:w-auto" />
        )}
      </div>
    </div>
  );
};

export default GalleryItem;
