import React, { useState } from 'react';
import './recentPostsBar.scss';

type Props = {
  link: string;
  imageUrl: string;
  title: string;
};

const PostTile = ({ imageUrl, title, link }: Props) => {
  const [mouseDown, setMouseDown] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const eventControl = (event: React.MouseEvent<HTMLElement>) => {
    if (event.type === 'mousedown' || event.type === 'touchdown') {
      setMouseDown(true);
    }

    if (event.type === 'mousemove' || event.type === 'touchmove') {
      if (mouseDown) {
        setIsDragging(true);
      }
    }

    if (event.type === 'mouseout' || event.type === 'touchexit') {
      setMouseDown(false);
      setIsDragging(false);
    }

    if (event.type === 'mouseup' || event.type === 'touchend') {
      if (mouseDown && !isDragging) {
        window.open(link, '_blank');
      }
      setMouseDown(false);
      setTimeout(() => {
        setIsDragging(false);
      }, 100);
    }
  };

  return (
    <div
      className="postTile"
      onMouseDown={eventControl}
      onMouseMove={eventControl}
      onMouseOut={eventControl}
      onMouseUp={eventControl}>
      <img className="postTile-image" src={imageUrl} draggable={false} />
      <h5 className="text-lg font-medium">{title}</h5>
    </div>
  );
};

export default PostTile;
