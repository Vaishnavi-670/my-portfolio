'use client';
import React from "react";
import { motion } from "framer-motion";

const PortfolioPage = () => {
  const skills = [
    { name: " HTML", percentage: 95 , logo: "./html-5.png"},
    { name: "JavaScript", percentage: 90 , logo: "./file-type-js-official.svg"},
    { name: "React", percentage: 85  , logo: "./react.svg"},
    { name: "Node.js", percentage: 80 , logo: "./nodejs.svg"},
    { name: "CSS", percentage: 95   , logo: "/css-3.png"},
    { name: "MongoDB", percentage: 70  , logo: "./mongodb.svg"},
  ];

  return (
    <>
      <div className="h-[100vh] bg-gray-900 text-white flex flex-col">
        {/* Navbar */}
        <header className="w-full px-8 py-4 flex justify-between items-center bg-gray-800 shadow-md fixed top-0">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-cyan-400">About</a></li>
              <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
              <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="flex-grow flex items-center mt-20 px-4">
          <div className="flex w-full h-full">
            {/* Image Section */}
            <motion.div
              className="w-1/3 flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="w-96 h-96 rounded-full bg-cyan-400 overflow-hidden shadow-lg">
                <img
                  src="/your-image.jpg"
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />
              </div>
              
            </motion.div>
            {/* Text Section */}
            <div className="w-1/2 flex flex-col justify-center text-left px-6">
              <motion.h1
                className="text-4xl md:text-5xl font-extrabold mb-4"
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
              > 

                Hi, I’m <span className="text-cyan-400">Vaishnavi</span>
              </motion.h1>
              <motion.p

                className="text-lg md:text-xl text-gray-400 mb-6"
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >

                A passionate and dedicated web developer specializing in crafting dynamic, responsive, and user-friendly websites. With a strong foundation in modern web technologies like JavaScript, React, Node.js, and MongoDB, I aim to deliver efficient and creative solutions tailored to meet diverse client needs.
              </motion.p>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
              > 
                             
                <a
                  href="#projects"
                  className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600"
                >
                  View My Work
                </a>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
      {/* Skills Section */}
      <div className="flex-grow h-[80vh] flex flex-col items-center justify-center ">
        <h2 className="text-4xl font-bold mb-8">My Skills</h2>
        <div className="w-full max-w-6xl grid grid-cols-1  md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-4 bg-gray-800 rounded-xl shadow-md"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-2">
                <img src={skill.logo} alt={skill.name} className="w-8 h-8 mr-4" />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <motion.div
                  className="bg-cyan-500 h-4 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1.5 }}
                ></motion.div>
              </div>
              <p className="text-right text-sm text-gray-400 mt-1">{skill.percentage}%</p>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <footer className="py-6 bg-gray-800 w-full text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      </footer>
    </>
  );
};

export default PortfolioPage;