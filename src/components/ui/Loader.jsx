import React, { useState, useEffect } from "react";

export default function Loader({ progress }) {
  const [cursor, setCursor] = useState(true);

  

  useEffect(() => {
    const c = setInterval(() => setCursor(v => !v), 600);
    return () => clearInterval(c);
  }, []);

  return (
    <div className={`
        fixed inset-0 z-50 flex flex-col items-center justify-center
        bg-gradient-to-b from-[#020617] via-[#040b1e] to-black
        overflow-hidden
        transition-opacity duration-300 ease-out
        ${progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}>

      {/* ===== Neural Core ===== */}
      <div className="relative w-[260px] h-[260px] mb-10">

        {/* Single rotating dotted orbit */}
        <svg className="absolute inset-0 animate-orbit" viewBox="0 0 300 300">
          <circle
            cx="150"
            cy="150"
            r="118"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            opacity="0.35"
          />
        </svg>

        {/* Neural silhouette */}
        <svg className="absolute inset-0 animate-float" viewBox="0 0 200 240">
          <path
            d="M100 15
               C140 15 165 50 165 90
               C165 120 150 135 135 150
               C155 170 160 210 100 225
               C40 210 45 170 65 150
               C50 135 35 120 35 90
               C35 50 60 15 100 15Z"
            fill="none"
            stroke="url(#g)"
            strokeWidth="2"
          />

          

          {/* Neural graph */}
          <g className="animate-pulse-soft">
            <line x1="100" y1="85" x2="70" y2="65" stroke="#22d3ee" />
            <line x1="100" y1="85" x2="130" y2="65" stroke="#a855f7" />
            <line x1="100" y1="85" x2="85" y2="120" stroke="#ec4899" />
            <line x1="100" y1="85" x2="115" y2="120" stroke="#22d3ee" />
            <line x1="100" y1="85" x2="115" y2="120" stroke="#22d3ee" />
            <line x1="100" y1="85" x2="115" y2="120" stroke="#22d3ee" />
            <line x1="100" y1="85" x2="115" y2="120" stroke="#22d3ee" />
            <line x1="100" y1="85" x2="85" y2="120" stroke="#ec4899" />


            <circle cx="100" cy="85" r="5" fill="#22d3ee" />
            <circle cx="70" cy="65" r="4" fill="#22d3ee" />
            <circle cx="130" cy="65" r="4" fill="#a855f7" />
            <circle cx="85" cy="120" r="4" fill="#ec4899" />
            <circle cx="115" cy="120" r="4" fill="#22d3ee" />
            <circle cx="130" cy="65" r="4" fill="#a855f7" />

          </g>
        </svg>
      </div>

      {/* ===== Title ===== */}
      <div className="font-mono text-cyan-400 text-3xl tracking-widest mb-6">
        INITIALIZI{cursor && "|"}
      </div>

      {/* ===== Progress ===== */}
      <div className="w-[340px]">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Loading…</span>
          <span>{Math.round(progress)}%</span>
        </div>

        <div className="h-[6px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-pink-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* ===== Bottom dots ===== */}
      <div className="flex gap-3 mt-8">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-dot" />
        <span className="w-2 h-2 rounded-full bg-purple-400 animate-dot delay-200" />
        <span className="w-2 h-2 rounded-full bg-pink-400 animate-dot delay-400" />
      </div>

      <style>{`
        @keyframes orbit {
          to { transform: rotate(360deg); }
        }
        .animate-orbit {
          animation: orbit 24s linear infinite;
          transform-origin: center;
        }

        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes pulseSoft {
          0%,100% { opacity: .6; }
          50% { opacity: 1; }
        }
        .animate-pulse-soft {
          animation: pulseSoft 3.5s ease-in-out infinite;
        }

        @keyframes dot {
          0%,100% { opacity: .4; }
          50% { opacity: 1; }
        }
        .animate-dot {
          animation: dot 1.8s infinite;
        }
        .delay-200 { animation-delay: .2s }
        .delay-400 { animation-delay: .4s }
      `}</style>
    </div>
  );
}
