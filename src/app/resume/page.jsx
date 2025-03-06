import React from 'react'

const Resume = () => {
    return (
        <>
            <div className="max-w-4xl mx-auto">
                <div className="text-center mt-10 mb-8">
                    <h1 className="text-4xl font-bold">VAISHNAVI</h1>
                    <p className="text-lg mb-4 font-medium">FULL STACK DEVELOPER</p>
                    <hr/>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <div className="mb-8">
                            <h2 className="text-xl font-bold mb-2">CONTACT</h2>
                            <p className="mb-2">
                                <i className="fas fa-phone-alt mr-2" />
                                +91 7080152724
                            </p>
                            <p className="mb-2">
                                <i className="fas fa-envelope mr-2" />
                                chauhanvaishnavi684@gmail.com
                            </p>
                            <p className="mb-2">
                                <i className="fas fa-map-marker-alt mr-2" />
                                14 baseliyaa Sawayajpur Hardoi
                            </p>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-xl font-bold mb-2">EDUCATION</h2>
                            <p className="mb-2">
                                <strong>Higher Secondary School(UP)</strong>
                                <br />
                                2020
                                <br />
                                Public Siksha Niketan School: 84%
                            </p>
                            <p className="mb-2">
                                <strong>Senior Secondary School(UP)</strong>
                                <br />
                                2022
                                <br />
                                Set Baburam Bharti Inter College: 76%
                            </p>
                            <p className="mb-2">
                                <strong>Bachelor of Computer Application</strong>
                                <br />
                                2022 - 2025
                                <br />
                                Sri Sharda Group of Institutions currently in 6th semester
                            </p>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-xl font-bold mb-2">SKILLS</h2>
                            <ul className="list-disc list-inside">
                                <li>Frontend Development</li>
                                <li>Backend Development</li>
                                <li>Database Management</li>
                                <li>Version Control</li>
                                <li>Project Management</li>
                                <li>Teamwork</li>
                                <li>Time Management</li>
                                <li>Effective Communication</li>
                                <li>Problem Solving</li>
                                <li>Leadership</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2">CERTIFICATES</h2>
                            <p className="mb-2">
                                MERN Stack Development Certificate [DIGIPODIUM]
                            </p>
                            <p className="mb-2">Project Completion Certificate [DIGIPODIUM]</p>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <div className="mb-8">
                            <h2 className="text-xl font-bold mb-2">PROFILE SUMMARY</h2>
                            <p>
                                Experienced and results-driven MERN Stack Developer with a strong
                                background in full-stack web development, specializing in React,
                                Node.js, Express, and MongoDB. Experienced in problem-solving, and
                                performance optimization. Passionate about delivering efficient,
                                high-performance, user-friendly solutions to drive business success.
                            </p>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-xl font-bold mb-2">WORK EXPERIENCE</h2>
                            <div className="mb-4">
                                <h3 className="font-bold">Interpe Company</h3>
                                <p className="italic">Web Development Intern</p>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Developed and optimized responsive web applications using the
                                        MERN stack (MongoDB, Express.js, React.js, Node.js).
                                    </li>
                                    <li>
                                        Assisted in frontend and backend development, implementing UI/UX
                                        improvements, and enhancing the user experience.
                                    </li>
                                    <li>
                                        Utilized Git and GitHub for version control, ensuring efficient
                                        collaboration and code management.
                                    </li>
                                    <li>
                                        Conducted debugging, testing, and performance optimization,
                                        improving website efficiency and functionality.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold">Digipodium Institute</h3>
                                <p className="italic">Web Development Intern</p>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Developed and maintained responsive web applications using HTML,
                                        CSS, JavaScript, React.js, and Node.js.
                                    </li>
                                    <li>
                                        Collaborated with a team to enhance UI/UX design, ensuring a
                                        seamless user experience.
                                    </li>
                                    <li>
                                        Built and optimized RESTful APIs to improve backend
                                        functionality and data processing.
                                    </li>
                                    <li>
                                        Worked with Git/GitHub for version control and project
                                        collaboration.
                                    </li>
                                    <li>
                                        Gained hands-on experience with database management (MongoDB).
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2">PROJECTS</h2>
                            <div>
                                <h3 className="font-bold">Mittii Mahal – E-commerce Website</h3>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Designed and developed a clay product e-commerce platform using
                                        the MERN stack. Implement user authentication, product
                                        filtering, cart management, and payment gateway integration.
                                    </li>
                                    <li>
                                        Developed a dynamic admin panel for product and order
                                        management.
                                    </li>
                                    <li>Deployed on Vercel for scalability.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume