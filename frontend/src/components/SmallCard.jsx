import React from 'react';

const SmallCard = (props) => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="max-w-xs h-24 w-44 mx-2 my-4 bg-black rounded-lg shadow-md overflow-hidden">
        <div className="px-6">
          <h2 className="text-xl font-bold mb-2 text-white">{props.likes}</h2>
          <h2 className="text-xl font-bold mb-2 text-white">{props.views}</h2>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
