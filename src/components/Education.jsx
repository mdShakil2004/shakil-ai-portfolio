import React from "react";
import { RiGraduationCapLine } from "react-icons/ri";

export default function Education() {
  return (
    <section className="relative min-h-screen bg-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            EDUCATION
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Academic foundation in computer science and engineering
          </p>
        </div>

        {/* Main Glass Card */}
        <div className="relative mx-auto max-w-5xl rounded-3xl
          bg-gradient-to-br from-[#0b1220] to-[#060b16]
          border border-white/10
          shadow-[0_40px_120px_rgba(0,0,0,0.8)]
          p-10 lg:p-14"
        >
          {/* Decorative dots */}
          <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 opacity-80" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 opacity-80" />

          {/* ===== RELATION LINES (PROPERLY ALIGNED) ===== */}

          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 520"
            fill="none"
          >
           

       <defs>
  <style>{`
    .electric-core {
      stroke: #e0f2fe;
      stroke-dasharray: 14 18;
      animation: flow 6s linear infinite;
    }

    .electric-glow {
      stroke: #38bdf8;
      stroke-dasharray: 14 18;
      animation: flow 6s linear infinite, pulse 1.5s ease-in-out infinite alternate;
      filter:
        drop-shadow(0 0 6px rgba(56,189,248,0.9))
        drop-shadow(0 0 14px rgba(56,189,248,0.7))
        drop-shadow(0 0 26px rgba(56,189,248,0.5));
    }

    .d1 { animation-delay: 0s; }
    .d2 { animation-delay: -2s; }
    .d3 { animation-delay: -4s; }

    @keyframes flow {
      to { stroke-dashoffset: -200; }
    }

    @keyframes pulse {
      from { opacity: 0.6; }
      to { opacity: 1; }
    }
  `}</style>
</defs>



            <path
              d="M180 230 H320"
              stroke="white"
              strokeOpacity="0.54"
              strokeWidth="4"
              className="electric-glow d1"
            />

            {/* Spine down */}
            <path
              d="M320 65 V460"
              stroke="white"
              strokeOpacity="0.46"
              strokeWidth="3"
              className="electric-core d1"
            />

            {/* Spine to chips */}
            <path
              d="M320 180 H460"
              stroke="white"
              strokeOpacity="0.26"
              strokeWidth="2"
              className="electric-glow d2"
            />
            <path
              d="M320 280 H840"
              stroke="white"
              strokeOpacity="0.46"
              strokeWidth="2"
              className="electric-core d2"
            />
            <path
              d="M320 340 H460"
              stroke="white"
              strokeOpacity="0.46"
              strokeWidth="1"
            className="electric-glow d1"
            />

            {/* Chips to subjects */}
         

            {/* Nodes */}
            <circle cx="320" cy="230" r="6.5" fill="#00a3d5" fillOpacity="0.72" />
            <circle cx="320" cy="180" r="5" fill="white" fillOpacity="0.61" />
            <circle cx="320" cy="280" r="5" fill="#00a3d5" fillOpacity="0.41" />
            <circle cx="320" cy="340" r="5" fill="white" fillOpacity="0.31" />
            {/* <circle cx="560" cy="290" r="3" fill="white" fillOpacity="0.1" /> */}
          </svg>
          {/* ===== END RELATION LINES ===== */}

          {/* Content */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {/* Left Logo */}
              <div className="flex mb-14 justify-center">
  <div
    className="
      relative w-28 h-28 rounded-2xl
      bg-gradient-to-br from-[#13233d] to-[#0b1628]
      border border-white/10
      flex items-center justify-center
      shadow-[0_20px_60px_rgba(0,0,0,0.6)]
    "
  >
    {/* Soft inner glow */}
    <div className="absolute inset-0 rounded-2xl bg-white/5 pointer-events-none" />

    {/* Logo */}
    <div className="flex flex-col items-center justify-center">
      <RiGraduationCapLine className="text-3xl mb-1 text-cyan-400" />
      <span className="text-cyan-400 text-sm font-semibold tracking-wider">
        VGU
      </span>
    </div>
  </div>
</div>



              {/* Right Info */}
              <div className="lg:col-span-2 ">
                <h3 className="text-3xl lg:text-4xl font-bold text-white">
                  B.Tech in Computer Science
                </h3>

                <p className="mt-2 text-cyan-400 text-lg font-medium">
                  Vivekananda Global University
                </p>

                <div className="mt-4 flex flex-wrap gap-6 text-gray-400 text-sm">
                  <span>📍 Jaipur, Rajasthan</span>
                  <span>📅 2022 – 2026</span>
                </div>

                {/* Chips */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <Chip title="CSE" subtitle="Specialization" color="cyan" />
                  <Chip title="AI / ML" subtitle="Focus Area" color="purple" />
                  <Chip title="2026" subtitle="Graduation" color="pink" />
                </div>

                {/* Subjects */}
                <div className="mt-12">
                  <p className="text-gray-500 text-md mb-4">
                    Key Subjects:
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {[
                      "Data Structures",
                      "Algorithms",
                      "Machine Learning",
                      "Database Systems",
                      "Software Engineering",
                      "Computer Networks",
                      "Operating Systems",
                      "AI & Deep Learning",
                    ].map((s, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 rounded-full
                        bg-white/5 border border-white/10
                        text-gray-300 text-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END CONTENT */}
        </div>
      </div>
    </section>
  );
}

function Chip({ title, subtitle, color }) {
  const colors = {
    cyan: "from-cyan-500/20 to-cyan-500/5 text-cyan-400",
    purple: "from-purple-500/20 to-purple-500/5 text-purple-400",
    pink: "from-pink-500/20 to-pink-500/5 text-pink-400",
  };

  return (
    <div
      className={`px-7 py-4 rounded-xl
      bg-gradient-to-br ${colors[color]}
      border border-white/10
      text-center`}
    >
      <div className="text-lg font-bold">{title}</div>
      <div className="text-xs text-white/60">{subtitle}</div>
    </div>
  );
}
