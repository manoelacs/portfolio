import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio to showcase my skills and projects.',
      techStack: 'React, Tailwind CSS',
      liveLink: '#',
      repoLink: '#',
    },
    {
      title: 'Weather App',
      description: 'A React app that fetches real-time weather data.',
      techStack: 'React, API Integration',
      liveLink: '#',
      repoLink: '#',
    },
  ];
  return (
    <section className='py-12 bg-gray-100'>
      <h2 className='text-3xl font-bold text-center text-gray-800'>Projects</h2>
      <div className='mt-8 flex flex-wrap justify-center gap-8'>
        {projects.map((project, index) => (
          <div key={index} className='w-80 p-4 bg-white shadow-lg rounded-lg'>
            <h3 className='text-xl font-bold'>{project.title}</h3>
            <p className='mt-2 text-gray-600'>{project.description}</p>
            <p className='mt-4 text-sm text-gray-500'>
              Tech Stack: {project.techStack}
            </p>
            <div className='mt-4 flex justify-between'>
              <a
                href={project.liveLink}
                className='text-blue-500 hover:underline'>
                Live Demo
              </a>
              <a
                href={project.repoLink}
                className='text-blue-500 hover:underline'>
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
