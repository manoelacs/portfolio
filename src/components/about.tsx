import React from 'react';

const About: React.FC = () => {
  return (
    <section className='py-12 bg-white text-center'>
      <h2 className='text-3xl font-bold text-gray-800'>About Me</h2>
      <p className='mt-4 text-gray-600 max-w-3xl mx-auto'>
        I started my journey as a front-end developer during the pandemic in my
        final semester of graduation. Since then, I’ve worked in three
        companies, building interactive and accessible web and mobile
        applications. I'm now learning Node.js and Express to become a
        full-stack developer.
      </p>
    </section>
  );
};

export default About;
