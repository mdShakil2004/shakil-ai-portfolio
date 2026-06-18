import React from "react";
import brainImg from "../assets/images/aboutBrain.jpg";
import {
  RiCheckLine
} from "react-icons/ri";
export default function About() {
  return (
    <section
      className="
        relative w-full bg-[#050B17] text-white overflow-hidden
        py-14 sm:py-16 lg:py-20
        px-4 sm:px-6 lg:px-10
      "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* ================= LEFT : IMAGE + BADGES ================= */}
        <div
          className="relative flex justify-center lg:justify-start"
          data-aos="fade-right"
          data-aos-duration="850"
        >
          {/* Image wrapper */}
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            className="
              relative w-full max-w-[340px]
              sm:max-w-[420px]
              md:max-w-[500px]
              lg:max-w-[560px]
              rounded-3xl overflow-hidden
              border border-white/5
              shadow-2xl
            "
          >
            <img
              src={brainImg}
              alt="AI Neural Brain"
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* ===== FLOATING BADGES (DESKTOP ONLY) ===== */}
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="absolute -left-8 hidden lg:block lg:-left-10 top-8 animate-float-desktop"
          >
            <div className="w-32 py-3 px-4 rounded-xl
              bg-gradient-to-br from-[#0BA8D4]/30 to-[#063E5A]/30
              border border-[#3BCFFF]/30 backdrop-blur-xl
              shadow-[inset_0_0_15px_rgba(6,62,90,0.35),0_0_20px_rgba(59,207,255,0.2)]
              text-[#A8EFFF] font-semibold text-sm text-center leading-tight"
            >
              <span className="text-xl font-bold block">500+</span>
              DSA Problems
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="absolute -left-8 hidden lg:block lg:-left-10 top-36 animate-float-desktop-delay-1"
          >
            <div className="w-32 py-3 px-4 rounded-xl
              bg-gradient-to-br from-[#C742C7]/30 to-[#5B1F67]/30
              border border-[#E47BFF]/30 backdrop-blur-xl
              shadow-[inset_0_0_15px_rgba(91,31,103,0.35),0_0_20px_rgba(228,123,255,0.2)]
              text-[#F4D8FF] font-semibold text-sm text-center leading-tight"
            >
              <span className="text-xl font-bold block">Top 3</span>
              Hackathon
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="absolute -left-8 hidden lg:block lg:-left-10 top-64 animate-float-desktop-delay-2"
          >
            <div className="w-32 py-3 px-4 rounded-xl
              bg-gradient-to-br from-[#D44664]/30 to-[#601E29]/30
              border border-[#FF8DA6]/30 backdrop-blur-xl
              shadow-[inset_0_0_15px_rgba(96,30,41,0.35),0_0_20px_rgba(255,141,166,0.2)]
              text-[#FFD4DB] font-semibold text-sm text-center leading-tight"
            >
              <span className="text-xl font-bold block">JPMC</span>
              Experience
            </div>
          </div>
        </div>

        {/* ================= RIGHT : CONTENT ================= */}
        <div
          className="space-y-6 sm:space-y-7 lg:space-y-8"
          data-aos="fade-left"
          data-aos-duration="850"
        >
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            className="text-cyan-400 tracking-widest text-xs sm:text-sm font-bold uppercase"
          >
            About Me
          </p>

          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Building AI That
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Feels Alive
            </span>
          </h1>

          <div
            data-aos="fade-up"
            data-aos-duration="850"
            className="text-gray-300 text-base sm:text-lg leading-relaxed space-y-4"
          >
            <p>
              I’m a <span className="text-cyan-400 font-medium">AI Engineer</span> building
              scalable real-time intelligent systems across backend, AI, and modern UI layers.
            </p>

            <p>
              During my internship at
              <span className="text-emerald-300 font-medium"> Webstack Academy</span>, I worked on
              full-stack web applications involving backend APIs, real-time features,
              authentication, and modern user interfaces.
            </p>

            <p>
              I also completed the
              <span className="text-rose-300 font-medium">
                {" "}JPMorgan Chase & Co. Software Engineering Virtual Experience
              </span>, working on backend-focused engineering challenges.
            </p>

            <div className="rounded-2xl p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-white/10">
                            <h4 className="text-lg font-semibold text-white mb-4">
                              Available For
                            </h4>
                            <ul className="space-y-2 text-gray-300 text-sm">
                              {[
                                "Full-time opportunities",
                                 "SDE Role",
                                "Freelance projects",
                                "Technical consultations",
                                "AI / ML collaborations",
                              ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <RiCheckLine className="text-emerald-400 text-lg" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
          </div>

          {/* ===== TAGS ===== */}
        <div
  data-aos="fade-up"
  data-aos-duration="800"
  className="flex flex-wrap gap-3 pt-2"
>
  {[
    {
      label: "Builder Mindset",
      cls: "from-[#0BA8D4]/40 to-[#0F3D57]/40 border-[#3BCFFF]/40 text-[#A8EFFF]",
    },
    {
      label: "System Architect",
      cls: "from-[#7A3DF2]/40 to-[#4A1C7A]/40 border-[#CDA5FF]/40 text-[#E5D4FF]",
    },
    {
      label: "AI Product Designer",
      cls: "from-[#B93766]/40 to-[#5A1A34]/40 border-[#FF8FB7]/40 text-[#FFD4E1]",
    },
    {
      label: "Real-Time Developer",
      cls: "from-[#0FA56B]/40 to-[#0B6144]/40 border-[#52EFB7]/40 text-[#BFFFE7]",
    },
    {
      label: "LLM Engineer",
      cls: "from-[#F59E0B]/40 to-[#7C4A03]/40 border-[#FFD27D]/40 text-[#FFE8B3]",
    },
    {
      label: "GenAI Systems",
      cls: "from-[#22C55E]/40 to-[#064E3B]/40 border-[#6EE7B7]/40 text-[#C7F9E9]",
    },
  ].map(({ label, cls }) => (
    <span
      key={label}
      className={`
        px-5 py-2.5 rounded-full
        bg-gradient-to-r ${cls}
        border
        text-sm font-bold tracking-wide
        backdrop-blur-md
        shadow-[0_6px_22px_rgba(0,0,0,0.35)]
        transform-gpu backface-hidden
      `}
    >
      {label}
    </span>
  ))}
</div>


          {/* ===== MOBILE BADGES ===== */}
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="grid grid-cols-3 gap-3 pt-6 lg:hidden"
          >
            <MiniBadge title="500+" label="DSA" />
            <MiniBadge title="Top 3" label="Hackathon" />
            <MiniBadge title="JPMC" label="Intern" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function MiniBadge({ title, label }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center backdrop-blur-md">
      <div className="text-lg font-bold text-cyan-400">{title}</div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  );
}
