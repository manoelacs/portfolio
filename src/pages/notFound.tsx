import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleReload = () => {
    navigate('/portfolio/home');
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-background'>
      <h1 className='text-4xl font-bold text-foreground'>Page Not Found</h1>
      <p className='text-lg text-foreground mt-4'>
        The page you are looking for does not exist.
      </p>
      <button
        onClick={handleReload}
        className='mt-6 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300'>
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
