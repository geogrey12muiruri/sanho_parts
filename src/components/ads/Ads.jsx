import React from 'react';

const Ads = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">High-Performance Fuel Injector Pump</h2>
      <img
        src="/path/to/fuel-injector-pump-image.jpg"
        alt="Fuel Injector Pump"
        className="w-full mb-4 rounded-lg"
      />
      <p className="text-gray-700 mb-4">
        Our high-performance fuel injector pump is designed to deliver optimal fuel flow and pressure to your engine. It is engineered for durability and precision, making it ideal for both automotive and industrial applications.
      </p>
      <ul className="list-disc pl-4 mb-4">
        <li>High fuel flow rate</li>
        <li>Precise fuel pressure control</li>
        <li>Durable and reliable</li>
        <li>Suitable for various engine types</li>
      </ul>
      <div className="flex justify-between items-center">
        <p className="text-gray-700">
          Price: $XXX.XX
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Ads;
