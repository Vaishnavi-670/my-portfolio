import React from 'react'

const Project = () => {
    const projects = [
        {
          title: 'E-Commerce Platform',
          description: 'A full-featured e-commerce platform with payment integration and user authentication.',
          image: '/ecommerce.png',
          link: 'https://myecommerce.com'
        },
        {
          title: 'Tourishta hub',
          description: 'A personal portfolio showcasing skills, projects, and contact details.',
          image: '/portfolio.png',
          link: 'https://myportfolio.com'
        },
        {
          title: 'Food Delivery App',
          description: 'A food ordering app that connects restaurants with customers.',
          image: '/foodapp.png',
          link: 'https://foodapp.com'
        }
      ];
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 max-w-sm">
            <img
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project