import React, { useState } from 'react';
import { assets } from '../assets/assets';
import "../App.css"
const FeaturedWork = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI', 'Full Stack', 'LLM Apps', 'Mobile'];

  const allProjects = [
     {
      title: "LLM - Project Store",
      description: "A curated collection of production-ready LLM applications built with Retrieval-Augmented Generation (RAG), AI Agents, Multi-Agent Systems,MCP, Voice AI, and Multimodal intelligence",
      tech: ["Python", "AI Agents", "FastAPI", "RAG.."],
      stats: ["98.5% Accuracy", "60ms Latency"],
      category: "LLM Apps",
      badgeColor: "bg-blue-600",
      image: assets.LLMS_app_store,
      modalImage: assets.LLMS_app_store,

      liveUrl:null,
      codeUrl:"https://github.com/mdShakil2004/LLM-projects-Store?from=md_shakil_portfolio",

    },
    {
      title: "Reva AI - Multimodal Intelligence Engine",
      description: "Next-generation multimodal AI engine powered by contextual memory and streaming intelligence. Processes vision, voice, and text in real-time.",
      tech: ["PyTorch", "LangChain", "FastAPI", "WebSocket"],
      stats: ["98.5% Accuracy", "50ms Latency"],
      category: "AI",
      badgeColor: "bg-purple-500",
      image: assets.AiEngine,
      modalImage: assets.aboutBrain,
      liveUrl:"https://reva-ai-six.vercel.app?from=md_shakil_portfolio",
      codeUrl:"https://github.com/mdShakil2004/Reva-ai-project?from=md_shakil_portfolio",
    },
    {
      title: "LYVON - Premium E-Commerce Platform",
      description: "High-performance e-commerce platform with AI-powered recommendations, real-time inventory management, and seamless payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      stats: ["99.9% Performance", "+45% Conversion"],
      category: "Full Stack",
      badgeColor: "bg-pink-500",
      image: assets.lyvon,
      liveUrl:"https://lyvon.vercel.app?from=md_shakil_portfolio",
      codeUrl:"https://github.com/mdShakil2004/LYVON_shoes?from=md_shakil_portfolio",
    },
    {
      title: "Airline Management Platform - IIT Guwahati",
      description: "Comprehensive airline management system with real-time flight tracking, crew scheduling, and passenger management capabilities. with admin pannel handle CRUD operations",
      tech: ["Java", "Spring Boot", "MySQL", "React"],
      stats: ["+60% Efficiency", "50ms Latency"],
      category: "Full Stack",
      badgeColor: "bg-pink-500",
      image: assets.airplane,
      liveUrl:"https://airline-p.vercel.app/home?from=md_shakil_portfolio",
      codeUrl:"https://github.com/mdShakil2004/airline-management-project?from=md_shakil_portfolio",
    },
    {
      title: "Smart Trip Planner App - Internship Project",
      description: `AI-powered travel companion app with intelligent itinerary planning, real-time recommendations, and personalized travel insights Built a full-stack AI-powered travel app offering route optimization, live weather updates, local event discovery, and hotel booking Developed a real-time group chat using WebSocket with typing indicators, media sharing, group invites, moderation features.
Integrated external APIs and AI for personalized travel suggestions and discovery of hidden gems.
Implemented secure user authentication, media uploads via Cloudinary .`,
      tech: ["React Native", "Python", "TensorFlow", "Firebase"],
      stats: ["+60% Efficiency", "40ms Latency"],
      category: "Mobile",
      badgeColor: "bg-green-500",
      image: assets.tripPlane,
      liveUrl:"https://trip-planner-vocat.vercel.app?from=md_shakil_portfolio",
      codeUrl:"https://github.com/mdShakil2004/trip-planner-project?from=md_shakil_portfolio",
    },
    {
      title: "Upcoming AI Project #1",
      description: "Revolutionary AI system currently in development. Stay tuned for groundbreaking innovations.",
      tech: ["AI", "Machine Learning", "Deep Learning"],
      category: "AI",
      badgeColor: "bg-purple-500",
      comingSoon: true,
      image: assets.comming_soon,
     liveUrl: null,
codeUrl: null,

    },
    {
      title: "Upcoming AI Project #2",
      description: "Next-generation AI solution in the pipeline. Preparing to revolutionize the industry.",
      tech: ["NLP", "Computer Vision", "MLOps"],
      category: "AI",
      badgeColor: "bg-purple-500",
      comingSoon: true,
      image: assets.comming_soon,
      liveUrl: null,
codeUrl: null,


    },
    {
      title: "Future Full-Stack System #1",
      description: "Innovative full-stack solution currently being architected. Expect cutting-edge technology.",
      tech: ["Microservices", "Cloud", "DevOps"],
      category: "Full Stack",
      badgeColor: "bg-pink-500",
      comingSoon: true,
      image: assets.comming_soon,
    liveUrl: null,
codeUrl: null,

    },
  
  ];

  const filteredProjects = activeCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory);

  const openModal = (project) => {
    if (!project.comingSoon) {
      setSelectedProject(project);
    }
  };

  const closeModal = () => setSelectedProject(null);





const openUrl = (url) => {
  if (!url) {
    alert("Coming soon 🚧");
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
};



  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0f] to-black py-12 px-6 md:py-16 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header - Responsive */}
          <div  data-aos="fade-up"
  data-aos-duration="700"
   className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-12 gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              FEATURED WORK
            </h2>
           
          </div>

          {/* Category Pills - Responsive Wrap */}
          <div className="flex flex-wrap gap-3 mb-10 md:mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:scale-105 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/40"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid - Fully Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div

                key={index}
     data-aos="fade-up"
data-aos-duration="800"
data-aos-anchor-placement="top-bottom"



                onClick={() => openModal(project)}
                className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 ${
                  project.comingSoon ? '' : 'cursor-pointer'
                }`}
              >
                {/* Image Container - Responsive Height */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
{project.comingSoon && (
  <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20 backdrop-blur-sm">
    <div className="text-center">
      {/* "COMING SOON" Text with Gradient & Pulse */}
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 tracking-wider">
        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
          COMING SOON
        </span>
      </h3>

      {/* Advanced Animated Loader - Futuristic AI Orb Style */}
      <div className="relative mx-auto w-10 h-10 sm:w-20 sm:h-20">
        {/* Outer Orbit Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-spin-slow"></div>
        
        {/* Middle Pulsing Ring */}
        <div className="absolute inset-2 rounded-full border-4 border-cyan-500/50 animate-ping"></div>
        
        {/* Inner Glowing Core */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 shadow-2xl shadow-cyan-500/50 animate-pulse"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-300 rounded-full animate-float"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 bg-purple-400 rounded-full animate-float-delayed"></div>
        <div className="absolute top-3 left-2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float-slow"></div>
      </div>

      {/* Subtle Tagline */}
      <p className="mt-8 text-gray-400 text-sm sm:text-base tracking-wide">
        Something extraordinary is in development...
      </p>
    </div>
  </div>
)}

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className={`absolute top-2 left-2 sm:top-4 sm:left-4 ${project.badgeColor} text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg`}>
                    {project.category}
                  </div>
                </div>

                {/* Content - Responsive Padding & Text */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700/70 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  {project.stats && (
                    <div className="flex flex-wrap gap-4 sm:gap-6 mb-6">
                      {project.stats.map((stat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-cyan-400 font-bold text-base sm:text-lg">{stat.split(' ')[0]}</span>
                          <span className="text-gray-400 text-xs sm:text-sm">
                            {stat.includes('%') || stat.includes('K') || stat.includes('/') ? stat.split(' ')[1] : ''}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center hover:bg-cyan-500/40 transition-all duration-300">
                      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all duration-300">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-500 text-lg sm:text-xl">No projects found in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Responsive Modal */}
     {/* Responsive Modal */}
{selectedProject && (
  <div
    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
    onClick={closeModal}
  >
    <div
      data-aos="zoom-in"
      data-aos-duration="400"
      onClick={(e) => e.stopPropagation()}
      className="
        relative
        w-full
        max-w-6xl
        max-h-[92vh]
        bg-gray-900/95
        border border-gray-700
        rounded-3xl
        shadow-2xl
        overflow-hidden
        flex flex-col
      "
    >
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="
          absolute top-4 right-4 z-50
          w-10 h-10
          rounded-full
          bg-gray-800/80 hover:bg-gray-700
          text-white text-3xl
          flex items-center justify-center
          transition
        "
      >
        ×
      </button>

      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row h-full overflow-y-auto">

        {/* IMAGE SECTION */}
        <div
          className="
            relative
            flex
            items-center
            justify-center
            bg-gradient-to-br from-[#05080f] via-[#0b1220] to-black
            lg:w-1/2
            min-h-[220px]
            sm:min-h-[320px]
            lg:min-h-full
          "
        >
          {/* Soft Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />

          {/* Image */}
          <img
            src={selectedProject.modalImage || selectedProject.image}
            alt={selectedProject.title}
            className="
              relative
              max-w-[90%]
              max-h-[70vh]
              object-contain
              rounded-2xl
              shadow-2xl
              shadow-cyan-500/20
            "
          />
        </div>

        {/* DETAILS SECTION */}
        <div
          className="
            lg:w-1/2
            p-6 sm:p-10
            flex flex-col
            justify-between
          "
        >
          <div>
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
              {selectedProject.title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              {selectedProject.description}
            </p>

            {/* Impact Stats */}
            {selectedProject.stats && (
              <div className="grid grid-cols-2 gap-4 mb-8">
                {selectedProject.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="
                      bg-gray-800/70
                      border border-gray-700
                      rounded-2xl
                      p-4
                      text-center
                    "
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">
                      {stat.split(" ")[0]}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 mt-1">
                      {stat.replace(stat.split(" ")[0], "")}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-4 py-2
                      bg-gradient-to-r from-cyan-600 to-blue-600
                      text-white
                      rounded-full
                      text-xs sm:text-sm
                      font-medium
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
  {/* Live Demo */}
  <button
    onClick={() => openUrl(selectedProject.liveUrl)}
    disabled={!selectedProject.liveUrl}
    className={`px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all
      ${
        selectedProject.liveUrl
          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white cursor-pointer hover:shadow-2xl hover:shadow-cyan-500/50"
          : "bg-gray-700 text-gray-400 cursor-not-allowed"
      }
    `}
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
    Live Demo
  </button>

  {/* View Code */}
  <button
    onClick={() => openUrl(selectedProject.codeUrl)}
    disabled={!selectedProject.codeUrl}
    className={`px-8 py-4 rounded-full font-bold text-lg flex  items-center justify-center gap-3 transition-all
      ${
        selectedProject.codeUrl
          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white cursor-pointer hover:shadow-2xl hover:shadow-purple-500/50"
          : "bg-gray-700 text-gray-400 cursor-not-allowed"
      }
    `}
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
    View Code
  </button>
</div>

        </div>
      </div>
    </div>
  </div>
)}

      
    </>
  );
};

export default FeaturedWork;