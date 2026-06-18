// src/components/Hero.jsx
import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import { incrementVisitors } from "../utils/incrementVisitors";

export default function Hero() {
  const canvasRef = useRef(null);

  const FALLBACK_COUNT = 1255;
  const [rawCount, setRawCount] = useState(FALLBACK_COUNT);
  const [status, setStatus] = useState(
    navigator.onLine ? "loading" : "offline"
  );

  function animateCount(from, to, setValue) {
    const duration = 600;
    const start = performance.now();

    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(from + (to - from) * eased);
      setValue(current);
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function formatCount(num) {
    if (num < 1000) return num.toString();
    if (num < 1_000_000) return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  }

  // Visitor counter logic
  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const count = await incrementVisitors();
        if (cancelled || typeof count !== "number") {
          setStatus("offline");
          return;
        }
        setStatus("online");
        animateCount(rawCount, count, setRawCount);
      } catch {
        if (!cancelled) setStatus("offline");
      }
    };

    load();

    const handleOnline = () => { setStatus("loading"); load(); };
    const handleOffline = () => setStatus("offline");

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      cancelled = true;
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Canvas animation with proper resize handling
 // Canvas animation with proper resize handling (HIGH PERFORMANCE)
useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  let animationId;

  // ===== INTERNAL STATE (FAST) =====
  let width = 0;
  let height = 0;
  let dots = [];
  let streaks = [];

  // ===== PARTICLES INIT =====
  const initParticles = () => {
    dots.length = 0;
    streaks.length = 0;

    const dotCount = Math.min(60, Math.floor(width / 15));
    const streakCount = Math.min(35, Math.floor(width / 25));

    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.8 + 0.5,
        alpha: Math.random() * 0.4 + 0.2,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      });
    }

    for (let i = 0; i < streakCount; i++) {
      streaks.push({
        x: Math.random() * width,
        y: Math.random() * height,
        len: Math.random() * 80 + 30,
        speed: Math.random() * 0.6 + 0.2,
        alpha: Math.random() * 0.25 + 0.1,
      });
    }
  };

  // ===== RESIZE (DPI SAFE) =====
 const resizeCanvas = () => {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width * dpr;
  canvas.height = height * dpr;

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  initParticles();
};


  // ===== DRAW =====
  const drawDots = () => {
    for (const d of dots) {
      d.x += d.vx;
      d.y += d.vy;

      if (d.x < 0) d.x = width;
      if (d.x > width) d.x = 0;
      if (d.y < 0) d.y = height;
      if (d.y > height) d.y = 0;

      ctx.fillStyle = `rgba(0,255,255,${d.alpha})`;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const drawStreaks = () => {
    ctx.lineWidth = 1.5;
    ctx.lineCap = "round";

    for (const s of streaks) {
      s.x += s.speed;
      if (s.x - s.len > width) s.x = -s.len;

      const grad = ctx.createLinearGradient(s.x, s.y, s.x + s.len, s.y);
      grad.addColorStop(0, "rgba(0,255,255,0)");
      grad.addColorStop(0.15, `rgba(0,255,255,${s.alpha * 0.3})`);
      grad.addColorStop(0.5, `rgba(0,255,255,${s.alpha})`);
      grad.addColorStop(0.85, `rgba(0,255,255,${s.alpha * 0.3})`);
      grad.addColorStop(1, "rgba(0,255,255,0)");

      ctx.strokeStyle = grad;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x + s.len, s.y);
      ctx.stroke();
    }
  };

  // ===== ANIMATION LOOP =====
  const animate = () => {
    ctx.fillStyle = "rgba(5, 0, 25, 0.35)";
    ctx.fillRect(0, 0, width, height);

    drawDots();
    drawStreaks();

    animationId = requestAnimationFrame(animate);
  };

  // ===== INIT =====
  resizeCanvas();
  animate();

  window.addEventListener("resize", resizeCanvas, { passive: true });

  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener("resize", resizeCanvas);
  };
}, []);















  return (
    <section className="relative min-h-screen overflow-x-hidden text-white">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10 pointer-events-none " aria-hidden="true" />

      {/* Deep Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#000a1f] via-[#0f001f] to-[#1a001a] -z-20" />

      {/* Top Status Bar */}
    <div className="absolute top-2 sm:top-4 left-0 right-0 z-50 px-2 sm:px-4">
  <div
    className="
      max-w-6xl mx-auto
      grid grid-cols-1 gap-2
      sm:grid-cols-[1fr_auto]
      items-center
    "
  >
    {/* LEFT SIDE — 2 ITEMS */}
    <div className="flex justify-center sm:justify-start gap-3 sm:gap-6 flex-wrap">
      {/* Visitors */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-full
        bg-[#0b0220]/85 border border-cyan-400/30 backdrop-blur-xl
        shadow-[0_0_18px_rgba(34,211,238,0.18)]
        text-xs tracking-widest">
        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <span className="text-white/90 font-medium">{formatCount(rawCount)}</span>
        <span
          className={`text-xs ${
            status === "online"
              ? "text-green-400"
              : status === "loading"
              ? "text-cyan-400"
              : "text-yellow-400"
          }`}
        >
          {status === "online"
            ? "Visitors"
            : status === "loading"
            ? "Updating…"
            : "Offline"}
        </span>
      </div>

      {/* AI System */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-full
        bg-[#0b0220]/85 border border-green-400/30 backdrop-blur-xl
        shadow-[0_0_18px_rgba(74,222,128,0.18)]
        text-xs tracking-widest">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-white/80">AI System</span>
        <span className="text-green-400 font-semibold">Online</span>
      </div>
    </div>

    {/* RIGHT SIDE — SINGLE ITEM */}
    <div className="flex justify-center sm:justify-end">
      <div className="flex items-center gap-2 px-4 py-2 rounded-full
        bg-[#0b0220]/85 border border-violet-400/30 backdrop-blur-xl
        shadow-[0_0_18px_rgba(167,139,250,0.18)]
        text-xs tracking-widest">
        <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3v18m4.5-18v18M3 12h18" />
        </svg>
        <span className="text-white/80">Neural Processing</span>
        <span className="text-violet-400 font-semibold">Active</span>
      </div>
    </div>
  </div>
</div>


      {/* Top Right Floating Badges - Hidden on mobile, shown from md+ */}
      <div className="  hidden lg:flex
  absolute
  top-20
  right-4 xl:right-10
  flex-col gap-4
  z-40">
        <div className="bubble w-24 h-24 lg:w-28 lg:h-28 bg-cyan-900/40 backdrop-blur-md border border-cyan-500/50 rounded-full flex flex-col items-center justify-center shadow-2xl" style={{ "--d": "4s", "--x": "6px", "--y": "22px" }}>
          <div className="text-2xl mb-2">🧠</div>
          <p className="text-xs lg:text-sm tracking-widest text-cyan-300 text-center font-medium px-2">Builder Mindset</p>
        </div>
        <div className="bubble w-24 h-24 lg:w-28 lg:h-28 bg-purple-900/40 backdrop-blur-md border border-purple-500/50 rounded-full flex flex-col items-center justify-center shadow-2xl" style={{ "--d": "5.5s", "--x": "-9px", "--y": "28px" }}>
          <div className="text-2xl mb-2">⚙️</div>
          <p className="text-xs lg:text-sm tracking-widest text-purple-300 text-center font-medium px-2">System Architect</p>
        </div>
        <div className="bubble w-24 h-24 lg:w-28 lg:h-28 bg-pink-900/40 backdrop-blur-md border border-pink-500/50 rounded-full flex flex-col items-center justify-center shadow-2xl" style={{ "--d": "6.2s", "--x": "4px", "--y": "18px" }}>
          <div className="text-2xl mb-2">✨</div>
          <p className="text-xs lg:text-sm tracking-widest text-pink-300 text-center font-medium px-2">AI Product Designer</p>
        </div>
      </div>

      {/* Main Content */}
      <div className=" 
 relative z-20
    mx-auto
    max-w-[1400px]
    px-4 sm:px-6
    pt-28 pb-16

    grid
    grid-cols-1
    gap-16

    md:grid-cols-[420px_1fr]
    lg:grid-cols-[520px_1fr]
    items-center
  ">
        {/* Left: Profile Emblem */}
        <div className=" flex justify-center">
          <div className="     relative
      w-[260px] h-[260px]
      sm:w-[320px] sm:h-[320px]
      md:w-[360px] md:h-[360px]
      lg:w-[520px] lg:h-[520px]
      flex items-center justify-center">
            {/* Ambient Halo */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_65%)]" />

            {/* Outer Ring */}
            <div className="absolute w-[70%] h-[70%] rounded-full border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)]" />

            {/* Inner Glow */}
            <div className="absolute w-[60%] h-[60%] rounded-full border border-cyan-400/20 shadow-[0_0_40px_rgba(56,189,248,0.18)]" />

            {/* Profile Core */}
            <div className=" relative w-[75%] h-[75%] flex items-center justify-center">
              <img
                src={assets.profile_pic}
                alt="Md Shakil – AI Engineer"
                className="w-[62%] h-[62%] rounded-full object-cover"
                loading="eager"
              />
            </div>

            {/* Floating Nodes - Responsive Positioning */}
            <div className="absolute top-0 z-20 left-[65%] sm:left-[70%] -translate-x-1/2 soft-float" style={{ "--t": "7s" }}>
              <div className="px-4 py-5 sm:px-5 sm:py-6 rounded-xl text-[10px] sm:text-[11px] tracking-widest bg-gradient-to-br from-[#0A2340]/85 to-[#051428]/85 border border-cyan-400/50 backdrop-blur-xl shadow-[0_0_22px_rgba(56,189,248,0.35)] text-cyan-300">
                TOKENIZER
              </div>
            </div>

            <div className="absolute z-20 top-1/2 right-[-5%] sm:right-[-9%] lg:right-[-7%] -translate-y-1/2 soft-float" style={{ "--t": "6.5s" }}>
              <div className="px-4 py-5 sm:px-5 sm:py-6 rounded-xl text-[10px] sm:text-[11px] tracking-widest bg-gradient-to-b from-[#2d1c45]/55 to-[#1a1234]/55 border border-violet-400/45 backdrop-blur-xl shadow-[0_0_22px_rgba(167,139,250,0.35)] text-violet-200">
                ENCODER
              </div>
            </div>

            <div className="absolute z-20 bottom-0 right-[10%] sm:right-[15%] soft-float z-30" style={{ "--t": "7.5s" }}>
              <div className="px-4 py-5 sm:px-5 sm:py-6 rounded-xl text-[10px] sm:text-[11px] tracking-widest bg-gradient-to-b from-[#4a1a28]/45 to-[#2e111d]/45 border border-rose-400/45 backdrop-blur-xl shadow-[0_0_22px_rgba(251,113,133,0.35)] text-rose-200">
                DECODER
              </div>
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className=" text-center md:text-left space-y-6 md:space-y-8 lg:space-y-12">
          <h1 className=" text-4xl
  sm:text-5xl
  md:text-6xl
  lg:text-7xl
  xl:text-8xl
  font-black leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              MD SHAKIL
            </span>
          </h1>

          <div className="space-y-4
  text-xl
  sm:text-2xl
  md:text-2xl
  lg:text-4xl
  font-light tracking-widest">
            <p>Engineering Multimodal AI</p>
            <p>Real-Time Systems</p>
            <p>LLM-Based Applications</p>
          </div>

          <p className="text-lg sm:text-xl text-gray-400 font-light max-w-xl mx-auto lg:mx-0">
            AI Engineer × Full Stack Architect × System Designer
          </p>





          <div className=" flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href={assets.resume}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group relative px-8 py-4 rounded-full border border-cyan-400 text-white font-bold text-lg sm:text-xl shadow-2xl overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                RESUME
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/40 blur-2xl scale-0 group-hover:scale-150 transition-transform duration-800" />
            </a>

            <a
              href="https://github.com/mdShakil2004?from=md_shakil_portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full border border-gray-700 hover:border-cyan-400 hover:bg-cyan-500/10 backdrop-blur-md transition-all flex items-center justify-center gap-4 text-lg font-medium"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GITHUB
            </a>

            <a
              href="mailto:mdshakil.dev@gmail.com?subject=Opportunity%20Discussion%20—%20Portfolio%20Review"
              className="px-8 py-4 rounded-full border border-gray-700 hover:border-cyan-400 hover:bg-cyan-500/10 backdrop-blur-md transition-all flex items-center justify-center gap-4 text-lg font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              CONTACT
            </a>
          </div>

          
        </div>
      </div>

      {/* Scroll Indicator */}
     <div className="mt-14 z-50 flex justify-center animate-bounce">
  <div className="w-8 h-12 border-2 border-gray-500 rounded-full flex justify-center pt-3">
    <div className="w-1.5 h-5 bg-gray-400 rounded-full" />
  </div>
</div>

    </section>
  );
}