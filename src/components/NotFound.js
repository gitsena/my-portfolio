import React from 'react';
import backgroundImage from './caminho/para/sua/notFound.jpg'; 

export const notFound = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8"></h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Voltar
        </button>
      </div>
    </div>
  );
};

