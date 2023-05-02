import React from 'react';

const CardResultsGrid = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md">
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
          <div className="px-4 py-2">
            <h3 className="text-gray-800 font-semibold">{item.title}</h3>
            <p className="text-gray-500">{item.description}</p>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-sm font-medium text-blue-500">{item.company}</span>
              <span className="text-sm text-gray-400">{item.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardResultsGrid;
