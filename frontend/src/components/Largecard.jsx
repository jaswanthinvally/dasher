import React from 'react';

const LargeComponent = (props) => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="max-w-xl h-28 w-56 mx-2 my-4 bg-black rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold mb-2 text-white">{props.likes}</h2>
          <h2 className="text-2xl font-bold mb-2 text-white">{props.views}</h2>
        </div>
      </div>
    </div>
  );
};

export default LargeComponent;
