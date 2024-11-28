import React from 'react';

const Home: React.FC = () => {
  return (
    <section className='min-h-screen bg-gray-50 flex flex-col justify-center items-center text-center p-4'>
      <h1 className='text-4xl font-bold text-gray-800 animate-fadeIn'>
        Hi, I'm Manoela 👩‍💻
      </h1>
      <p className='mt-4 text-lg text-gray-600 animate-fadeIn delay-1s'>
        Front-End Developer specializing in React, TypeScript, and Accessibility
      </p>
      <button
        className='mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 animate-fadeIn delay-2s'
        aria-label='View My Projects'>
        View My Projects
      </button>
    </section>
  );
};

export default Home;
