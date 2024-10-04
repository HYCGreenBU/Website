import React from 'react';


const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="text-center">

        <h1 className="text-2xl mb-4">Loading...</h1>
        <div className="w-64 bg-gray-300 rounded">
          <div className="bg-blue-500 h-4 rounded" style={{ width: '50%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
