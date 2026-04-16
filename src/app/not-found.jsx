import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='mih-h-screen flex flex-col items-center justify-center text-center px-4 '>
             <h1 className="text-7xl font-bold text-gray-800">404</h1>
             <p className="text-xl text-gray-600 mt-4">
        Oops! Page not found
      </p>

      <p className="text-gray-500 mt-2">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link href={"/"}>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition duration-300">
          Go Home
        </button>
      </Link>

     

            
        </div>
    );
};

export default NotFoundPage;