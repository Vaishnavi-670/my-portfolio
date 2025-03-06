import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Section */}
      <div className="bg-purple-800 flex flex-col items-center justify-center p-10">
        <div className="bg-pink-100 p-10 text-center shadow-lg">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mx-auto">
            <img src="vaishuuu.jpg" alt="Vaishnavi" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-2xl mt-4 border-b-2 border-white pb-2">Vaishnavi</h2>
          <h3 className="uppercase text-sm tracking-widest mt-3">Student</h3>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mt-4 bg-pink-100 p-2 rounded-lg">
            <p className="bg-pink-400 text-black w-10 h-10 flex items-center justify-center rounded-full text-xl cursor-pointer hover:bg-green-100 hover:text-black transition">
              {/* <FaFacebook /> */}
            </p>
            <p className="bg-pink-400 text-black w-10 h-10 flex items-center justify-center rounded-full text-xl cursor-pointer hover:bg-green-100 hover:text-black transition">
              {/* <FaInstagram /> */}
            </p>
            <p className="bg-pink-400 text-black w-10 h-10 flex items-center justify-center rounded-full text-xl cursor-pointer hover:bg-green-100 hover:text-black transition">
              {/* <FaLinkedin /> */}
            </p>
            <p className="bg-pink-400 text-black w-10 h-10 flex items-center justify-center rounded-full text-xl cursor-pointer hover:bg-green-100 hover:text-black transition">
              {/* <FaTwitter /> */}
            </p>
          </div>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="bg-white flex flex-col items-center justify-center p-10 text-center">
        <h1 className="text-5xl uppercase font-bold">About Me</h1>
        
        {/* Buttons */}
        <div className="flex mt-6 space-x-4">
          <Link href="/contact" className="border-2 border-gray px-6 py-2 rounded-full uppercase font-semibold bg-purple-800 text-white hover:bg-transparent hover:text-black transition">
            Contact Me
          </Link>
          <Link href="/resume" className="border-2 border-gray px-6 py-2 rounded-full uppercase font-semibold hover:bg-purple-800 hover:text-white transition">
            Resume
          </Link>
        </div>
        
        {/* About Paragraph */}
        <p className="mt-6 text-gray-700 opacity-80 leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eligendi aliquid nemo amet? Excepturi necessitatibus, accusamus aspernatur illo quis reiciendis esse facere dignissimos culpa reprehenderit ea fugit! Earum voluptate accusamus debitis eum aliquam rerum!
        </p>
      </div>
    </div>
  );
};

export default About;
