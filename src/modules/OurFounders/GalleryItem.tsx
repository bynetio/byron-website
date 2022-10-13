import React, { ReactElement } from 'react';

const GalleryItem = ({ component }: { component: ReactElement }) => {
  return (
    <div className="flex items-center justify-center w-44 h-[90px] bg-white drop-shadow-xl mx-auto rounded-xl">
      {component}
    </div>
  );
};

export default GalleryItem;
