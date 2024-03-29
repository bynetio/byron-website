import React from 'react';
import { ArrowRight } from 'assets';

type Props = {
  title: string;
  imageComponent?: any;
  imageSrc?: string;
  description: string;
  url: string;
  urlOptional: string;
  buttonCopy: string;
  buttonCopyOptional: string;
};

const GalleryItem = ({
  title,
  description,
  url,
  urlOptional,
  imageSrc,
  imageComponent: Image,
  buttonCopy,
  buttonCopyOptional
}: Props) => {
  return (
    <div className="flex w-full h-auto flex-wrap md:flex-nowrap lg:px-32 gap-x-8">
      <div className="flex-1">
        <h3 className="font-['Mulish'] text-[22px] font-bold mb-6">{title}</h3>
        <p className="font-['Mulish'] font-medium text-base leading-[30px] text-[#717C91] mb-8">
          {description}
        </p>
        <a
          href={url}
          target="blank"
          className="flex text-left w-full md:w-auto h-12 bg-gradient-to-l from-[#089CFC] to-[#2B2DFD] rounded-lg p-[1px] mb-4">
          <div className="flex justify-center items-center w-full h-full px-6 rounded-lg bg-[#EFF6FF] hover:bg-gradient-to-r hover:from-[#2B2DFD] hover:to-[#089CFC]">
            <p className="font-['Mulish'] font-bold pr-2 hover:opacity-50">
              {buttonCopy} <ArrowRight className="inline" />
            </p>
          </div>
        </a>
        <a
          href={urlOptional}
          target="blank"
          className={`flex text-left w-full md:w-auto h-12 bg-gradient-to-l from-[#089CFC] to-[#2B2DFD] rounded-lg p-[1px] mb-4 ${
            urlOptional ? 'block' : 'hidden'
          }`}>
          <div className="flex justify-center items-center w-full h-full px-6 rounded-lg bg-[#EFF6FF] hover:bg-gradient-to-r hover:from-[#2B2DFD] hover:to-[#089CFC]">
            <p className="font-['Mulish'] font-bold pr-2 hover:opacity-50">
              {buttonCopyOptional} <ArrowRight className="inline" />
            </p>
          </div>
        </a>
      </div>
      <div className="flex-1">
        {imageSrc && (
          <figure
            className="min-w-[300px] max-w-[600px] w-full h-[400px] pointer-events-none"
            draggable={false}>
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
