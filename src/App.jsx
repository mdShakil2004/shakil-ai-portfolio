import React, { useEffect, useState, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Loader from "./components/ui/Loader";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Milestones from "./components/Milestones";
import ProfessionalJourney from "./components/ProfessionalJourney";
// import FeaturedWork from "./components/FeaturedWork";
import About from "./components/About";
import Hero from "./components/Hero";

import { assets } from "./assets/assets";
import { preloadAssets } from "./utils/preloadAssets";

// 🔥 LAZY LOAD HEAVY PARTS
// const Hero = lazy(() => import("./components/Hero"));
const SkillConstellation = lazy(() => import("./components/SkillConstellation"));
const FeaturedWork =lazy(()=>import("./components/FeaturedWork"))

const CRITICAL_ASSETS = {
  profile: assets.profile_pic,
  brain: assets.aboutBrain,
  resume: assets.resume,
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 160,
    });
  }, []);

  useEffect(() => {
    let mounted = true;

    const boot = async () => {
      await preloadAssets(CRITICAL_ASSETS, setProgress);

      if (!mounted) return;

      setProgress(100);

      // 🚀 NEXT FRAME → NO FREEZE
      requestAnimationFrame(() => {
        setLoading(false);
        AOS.refresh();
      });
    };

    boot();
    return () => (mounted = false);
  }, []);

  if (loading) return <Loader progress={progress} />;

  return (
    <div className="w-full min-h-screen overflow-x-hidden relative">
        <Hero />
    

      <About />

      <Suspense fallback={null}>
        <SkillConstellation />
      </Suspense>
 <Suspense fallback={null}>
      <FeaturedWork />
 </Suspense>
      <ProfessionalJourney />
      <Milestones />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
