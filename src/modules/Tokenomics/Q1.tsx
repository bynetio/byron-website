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
        <li className="text-white text-[16px] pb-3">
          <CheckIcon className="inline mr-6" />
          DApps-oriented
        </li>
        <li className="text-white text-[16px] pb-3">
          Delivering a set of functionality-packed DApps that respond to the community&apos;s needs.
        </li>
      </ul>
    </div>
  );
};

export default GalleryItem;
