import React, { useState } from "react";

const milestones = [
  {
    id: 1,
    icon: "</>",
    title: "DSA Mastery",
    value: "500+",
    subtitle: "Data Structures & Algorithms Problems Solved",
    description:
      "Mastered complex algorithmic challenges across multiple platforms including LeetCode, CodeChef, and Codeforces. Specialized in dynamic programming, graph algorithms, and optimization techniques.",
    accent: "text-cyan-400",
    iconBg: "bg-cyan-500/20",
  },
  {
    id: 2,
    icon: "🏆",
    title: "Code Red Winner",
    value: "Top 3",
    subtitle: "National Level Hackathon Achievement",
    description:
      "Secured top 3 position in Code Red hackathon among 500+ participants. Built an innovative AI-powered solution for real-time fraud detection in financial transactions.",
    accent: "text-purple-400",
    iconBg: "bg-purple-500/20",
  },
  {
    id: 3,
    icon: "🏪",
    title: "Walmart Experience",
    value: "SWE",
    subtitle: "Software Engineering Program",
    description:
      "Completed intensive software engineering program at Walmart, focusing on large-scale distributed systems, microservices architecture, and cloud-native development.",
    accent: "text-yellow-400",
    iconBg: "bg-yellow-500/20",
  },
  {
    id: 4,
    icon: "🎓",
    title: "Accenture Program",
    value: "ENG",
    subtitle: "Engineering Excellence Program",
    description:
      "Selected for Accenture Engineering Program, gaining expertise in enterprise software development, agile methodologies, and client-facing project management.",
    accent: "text-emerald-400",
    iconBg: "bg-emerald-500/20",
  },
  {
    id: 5,
    icon: "👥",
    title: "Leadership & Innovation",
    value: "LEAD",
    subtitle: "Multiple Hackathons & Leadership Roles",
    description:
      "Led multiple technical teams in hackathons and university projects. Organized coding workshops and mentored junior developers in competitive programming and software development.",
    accent: "text-blue-400",
    iconBg: "bg-blue-500/20",
  },
];

function ExpandedCard({ item, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
      data-aos="zoom-in"
      data-aos-duration="500"
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-gradient-to-br from-[#0b1220] to-[#060b16] border border-white/10 p-10 lg:p-12 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition flex items-center justify-center text-xl"
        >
          ✕
        </button>

        <div className={`mx-auto w-24 h-24 rounded-2xl flex items-center justify-center ${item.iconBg} mb-8`}>
          <span className="text-5xl">{item.icon}</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          {item.title}
        </h2>

        <div className={`text-6xl lg:text-7xl font-extrabold mb-6 ${item.accent}`}>
          {item.value}
        </div>

        <p className="text-white/80 text-lg lg:text-xl font-medium mb-6">
          {item.subtitle}
        </p>

        <p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-xl mx-auto">
          {item.description}
        </p>

        <button
          onClick={onClose}
          className="mt-10 px-10 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition font-medium"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function Milestones() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative min-h-screen bg-black py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          data-aos="fade-down"
          data-aos-duration="800"
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            MILESTONES
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto">
            Key achievements and recognitions in my journey as an AI Engineer and developer
          </p>
        </div>

        {/* Cards */}
        <div
          data-aos="fade-up"
          data-aos-duration="850"
          className="flex flex-wrap justify-center gap-8 lg:gap-12 px-4"
        >
          {milestones.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === milestones.length - 1;

            const baseRotate = isFirst
              ? "-rotate-3"
              : isLast
              ? "rotate-3"
              : index % 2 === 0
              ? "-rotate-1"
              : "rotate-1";

            return (
              <div
                key={item.id}
                onClick={() => setActive(item)}
                data-aos="zoom-in"
                data-aos-duration="700"
                role="button"
                tabIndex={0}
                className={`
                  relative w-64 h-80 rounded-3xl
                  bg-gradient-to-br from-[#0c1426] to-[#0a0f1a]
                  border border-white/10
                  cursor-pointer overflow-hidden
                  transform-gpu transition-all duration-500 ease-out
                  ${baseRotate}
                  hover:-translate-y-8 hover:rotate-0
                  hover:border-white/30 hover:shadow-2xl hover:shadow-purple-500/20
                `}
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${item.iconBg}`} />

                <div className="h-full p-8 pt-28 flex flex-col justify-between">
                  <div
                    className={`absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl ${item.iconBg} border border-white/10 flex items-center justify-center`}
                  >
                    <span className="text-3xl">{item.icon}</span>
                  </div>

                  <div className="text-center">
                    <div className={`text-5xl font-extrabold ${item.accent} mb-3`}>
                      {item.value}
                    </div>
                    <h3 className="text-white text-lg font-semibold">
                      {item.title}
                    </h3>
                  </div>

                  <div className="text-white/40 text-xs text-center">
                    Click for details →
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {active && <ExpandedCard item={active} onClose={() => setActive(null)} />}
    </section>
  );
}
