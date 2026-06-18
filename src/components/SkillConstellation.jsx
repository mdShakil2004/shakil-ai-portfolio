import React, { useEffect, useRef, useState } from "react";
import {
  Cpu, Image, Search, Network, Flame, Server, Layers,
  Boxes, Plug, GitBranch, Terminal, Globe, Smartphone, Palette
} from "lucide-react";
import { FaDocker, FaJava } from "react-icons/fa";
import { SiCplusplus, SiPython, SiJavascript } from "react-icons/si";

/* ICON MAP */
const ICON_MAP = {
  OCR: Image, CLIP: Image, FAISS: Search, LangChain: Network, PyTorch: Flame,
  FastAPI: Server, "Express.js": Layers, RAG: Boxes, Kafka: Network, WebSocket: Plug,
  Linux: Terminal, Docker: FaDocker, Git: GitBranch, "Node.js": Server,
  React: Globe, "React Native": Smartphone, Tailwind: Palette,
  "C++": SiCplusplus, Python: SiPython, Java: FaJava, JavaScript: SiJavascript,
};

/* COLORS */
const COLOR_MAP = {
  ai: { bg: "from-cyan-500/20 to-blue-600/20", border: "border-cyan-400/40", glow: "shadow-[0_0_25px_rgba(56,189,248,0.8)]", text: "text-cyan-300" },
  backend: { bg: "from-indigo-500/20 to-violet-600/20", border: "border-indigo-400/40", glow: "shadow-[0_0_25px_rgba(139,92,246,0.8)]", text: "text-indigo-300" },
  infra: { bg: "from-rose-500/20 to-pink-600/20", border: "border-rose-400/40", glow: "shadow-[0_0_25px_rgba(244,63,94,0.8)]", text: "text-rose-300" },
};

/* ORBITS */
const BASE_ORBITS = [
  { id: "inner", radius: 140, speed: 0.0049, dir: 1, category: "ai",
    skills: ["OCR", "CLIP", "FAISS", "LangChain", "PyTorch"] },
  { id: "middle", radius: 250, speed: 0.0026, dir: -1, category: "backend",
    skills: ["FastAPI", "Express.js", "RAG", "Kafka", "WebSocket"] },
  { id: "outer", radius: 360, speed: 0.00145, dir: 1, category: "infra",
    skills: ["Linux","Docker","Git","Node.js","React","React Native","Tailwind","C++","Python","Java","JavaScript"] },
];

export default function SkillConstellation() {
  const requestRef = useRef(null);
  const angleRef = useRef({});
  const [angles, setAngles] = useState({});
  const [hovered, setHovered] = useState(null);
  const [scale, setScale] = useState(1);

  /* Responsive scale */
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) setScale(0.55);
      else if (w < 640) setScale(0.65);
      else if (w < 768) setScale(0.75);
      else if (w < 1024) setScale(0.85);
      else setScale(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* Init angles once */
  useEffect(() => {
    const initial = {};
    BASE_ORBITS.forEach(o =>
      o.skills.forEach((s, i) => {
        initial[s] = (i / o.skills.length) * Math.PI * 2;
      })
    );
    angleRef.current = initial;
    setAngles(initial);
  }, []);

  /* Animation loop */
  useEffect(() => {
    const animate = () => {
      const next = { ...angleRef.current };

      BASE_ORBITS.forEach(o =>
        o.skills.forEach(s => {
          if (hovered === s) return;
          next[s] += o.speed * scale * o.dir;
        })
      );

      angleRef.current = next;
      setAngles(next);

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [hovered, scale]);

  return (
    <section className="relative w-full min-h-[560px] sm:min-h-[640px] lg:min-h-[900px]
      bg-gradient-to-br from-[#050712] via-[#070a1a] to-black
      flex items-center justify-center overflow-hidden">

      <h1 className="absolute top-2  text-3xl sm:text-4xl lg:text-5xl tracking-widest
        bg-gradient-to-r from-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
        SKILL CONSTELLATION 
      </h1>
      

      {/* Core */}
      <div className="absolute z-20 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24
        rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-600
        shadow-[0_0_60px_rgba(139,92,246,0.9)]
        flex items-center justify-center animate-pulse">
        <Cpu className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </div>

      {/* Orbits */}
      {BASE_ORBITS.map(o => (
        <div key={o.id}
          className="absolute rounded-full border border-dashed border-white/20"
          style={{
            width: o.radius * 2 * scale,
            height: o.radius * 2 * scale,
          }}
        />
      ))}

      {/* Skills (SAFE: state only) */}
      {BASE_ORBITS.map(o =>
        o.skills.map(skill => {
          const angle = angles[skill] || 0;
          const radius = o.radius * scale;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const color = COLOR_MAP[o.category];
          const Icon = ICON_MAP[skill];

          return (
            <div
              key={skill}
              onMouseEnter={() => setHovered(skill)}
              onMouseLeave={() => setHovered(null)}
              onTouchStart={() => setHovered(skill)}
              onTouchEnd={() => setHovered(null)}
              className={`
                absolute z-30 flex items-center gap-2
                px-3 sm:px-4 py-1.5 sm:py-2
                rounded-full text-xs sm:text-sm
                backdrop-blur-md bg-gradient-to-br ${color.bg}
                border ${color.border} ${color.text}
                transform-gpu will-change-transform
                transition-all duration-300
                ${hovered === skill ? `scale-110 ${color.glow}` : "opacity-90"}
              `}
              style={{
                transform: `translate3d(${x}px, ${y}px, 0)`,
              }}
            >
              {Icon && <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              {skill}
            </div>
          );
        })
      )}
    </section>
  );
}
