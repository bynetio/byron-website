import React from 'react';
import './tokenomics.scss';
import { CheckIcon } from 'assets';

type Props = {
  title: string;
};

const GalleryItem = ({ title }: Props) => {
  return (
    <div className="small-card mx-auto">
      <ul className="text-white">
        <li className="text-white pb-3">
          <CheckIcon className="inline text-[16px] mr-6" />
          Tools-oriented
        </li>
        <li className="text-white pb-3">
          Providing innovators and builders with tools to lower technological entry barriers to
          Cardano.
        </li>
      </ul>
    </div>
  );
};

export default GalleryItem;
