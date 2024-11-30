import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className='py-12 bg-gray-50 text-center'>
      <h2 className='text-3xl font-bold text-gray-800'>Contact Me</h2>
      <p className='mt-4 text-gray-600'>
        I'm always open to discussing projects and collaborations!
      </p>
      <form className='mt-8 max-w-md mx-auto'>
        <input
          type='text'
          placeholder='Your Name'
          className='w-full px-4 py-2 border rounded-lg mb-4'
        />
        <input
          type='email'
          placeholder='Your Email'
          className='w-full px-4 py-2 border rounded-lg mb-4'
        />
        <textarea
          placeholder='Your Message'
          className='w-full px-4 py-2 border rounded-lg mb-4'
          rows={4}></textarea>
        <button
          type='submit'
          className='w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
