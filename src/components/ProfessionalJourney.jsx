import React from "react";

const ProfessionalJourney = () => {
  const experiences = [
    {
      side: "right",
      title: "JPMorgan Chase & Co. Software Engineering Virtual Experience",
      role: "Software Engineer Intern",
      date: "4 week program",
      description: [
        "Developed high-performance microservices architecture using Spring Boot and Apache Kafka",
        "Implemented real-time data streaming solutions handling 100K+ transactions per second",
        "Optimized database queries resulting in 40% performance improvement",
        "Collaborated with cross-functional teams on mission-critical financial systems",
      ],
      tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker", "Kubernetes"],
      icon: "💼",
      gradient: "from-cyan-900/60 via-blue-900/50 to-indigo-900/60",
    },
    {
      side: "left",
      title: "Webstack Academy",
      role: "AI Developer Intern",
      date: "Jan 2024 – May 2024",
      description: [
        "Built intelligent travel recommendation system using machine learning algorithms",
        "Developed real-time AI-powered chatbot with natural language processing capabilities",
        "Implemented computer vision features for automatic image tagging and search",
        "Created RESTful APIs serving 10K+ daily active users with 99.9% uptime",
      ],
      tech: ["Python", "TensorFlow", "FastAPI", "React", "MongoDB", "AWS"],
      icon: "</>",
      gradient: "from-purple-900/60 via-fuchsia-900/50 to-pink-900/60",
    },
    {
      side: "right",
      title: "Next Chapter Loading...",
      role: "Future Opportunity",
      date: "2025",
      description: [
        "Exciting new opportunities on the horizon",
        "Ready to tackle challenging problems in AI and software engineering",
        "Open to innovative projects and cutting-edge technologies",
        "Building the future, one line of code at a time",
      ],
      tech: ["Innovation", "Growth", "Excellence"],
      icon: "🚀",
      gradient: "from-teal-900/60 via-cyan-800/50 to-blue-900/60",
      isFuture: true,
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-[#0a0a0f] to-black py-20 px-6 lg:py-32 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          data-aos="fade-down"
          data-aos-duration="800"
          className="text-center mb-24 lg:mb-32"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 tracking-tight">
            PROFESSIONAL JOURNEY
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed font-light">
            Building innovative solutions across diverse industries and technologies
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500/80 via-purple-500/80 to-pink-500/80 rounded-full blur-sm" />
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 rounded-full" />

          <div className="space-y-48 lg:space-y-64">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative"
                data-aos={exp.side === "left" ? "fade-right" : "fade-left"}
                data-aos-duration="850"
              >
                <div className="absolute left-1/2 -translate-x-1/2 top-12 w-6 h-6 bg-black rounded-full border-4 border-cyan-400 shadow-lg shadow-cyan-500/50 z-20" />

                <div
                  className={`relative max-w-2xl mx-auto lg:mx-0 ${
                    exp.side === "left" ? "lg:mr-auto lg:pr-20" : "lg:ml-auto lg:pl-20"
                  }`}
                >
                  <div className={`relative bg-gradient-to-br ${exp.gradient} backdrop-blur-2xl rounded-3xl p-10 lg:p-12 border border-white/10 shadow-2xl transition-all duration-700 hover:scale-[1.02]`}>
                    <div className="absolute -top-10 left-10 text-7xl lg:text-8xl opacity-90">
                      {exp.icon}
                    </div>

                    <div className="mt-8 lg:mt-10">
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-300 text-xl lg:text-2xl font-medium mb-4">
                        {exp.role}
                      </p>
                      <p className="text-gray-300 text-base lg:text-lg mb-10 flex items-center gap-3">
                        <span className="text-2xl">📅</span> {exp.date}
                      </p>

                      <ul className="space-y-5 mb-12">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-5 text-gray-200 text-base lg:text-lg leading-relaxed">
                            <span className="text-cyan-400 text-2xl mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-4">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className={`px-6 py-3 rounded-full font-medium text-sm lg:text-base transition-all hover:scale-110 ${
                              exp.isFuture
                                ? "bg-gradient-to-r from-cyan-500 to-teal-600 text-white shadow-lg shadow-cyan-500/40"
                                : "bg-white/5 border border-white/20 text-gray-200 backdrop-blur-md"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {exp.isFuture && (
                        <div className="mt-10 flex items-center gap-4 text-cyan-300 text-lg lg:text-xl font-semibold">
                          <span>Loading</span>
                          <div className="flex gap-2">
                            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" />
                            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-150" />
                            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-300" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;
