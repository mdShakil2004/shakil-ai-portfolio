import React, { useState } from "react";
import {
  RiLinkedinFill,
  RiGithubLine,
  RiTwitterXLine,
  RiMailLine,
  RiWhatsappLine,
  RiSendPlaneFill,
  RiCheckLine,
} from "react-icons/ri";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mdshakil2004?from=Md_Shakil_portfolio",
      icon: <RiLinkedinFill />,
    },
    {
      label: "GitHub",
      href: "https://github.com/mdShakil2004?from=Md_Shakil_portfolio",
      icon: <RiGithubLine />,
    },
    {
      label: "Twitter / X",
      href: "https://x.com/Md_Shakil012?from=Md_Shakil_portfolio",
      icon: <RiTwitterXLine />,
    },
    {
      label: "Email",
      href: "mailto:iam.shakil.dev@gmail.com?subject=Opportunity%20Discussion%20—%20Portfolio%20Review",
      icon: <RiMailLine />,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/917488940100?text=Hi%20Md%20Shakil,%20I%20visited%20your%20portfolio!",
      icon: <RiWhatsappLine />,
    },
  ];

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    setSubscribed(true);
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.15),transparent_40%)]" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-4 gap-16">
        {/* Brand */}
        <div>
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-xl font-bold mb-6">
            MS
          </div>
          <h3 className="text-lg font-semibold mb-3">
            Engineering Tomorrow&apos;s AI
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Building intelligent systems that bridge the gap between human
            creativity and artificial intelligence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-cyan-400 text-sm font-semibold tracking-widest mb-6">
            QUICK LINKS
          </h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="hover:text-white transition cursor-pointer">About</li>
            <li className="hover:text-white transition cursor-pointer">Skills</li>
            <li className="hover:text-white transition cursor-pointer">Achievements</li>
            <li className="hover:text-white transition cursor-pointer">Contact</li>
          </ul>
        </div>

        <div className="pt-10 lg:pt-11">
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="hover:text-white transition cursor-pointer">Projects</li>
            <li className="hover:text-white transition cursor-pointer">Experience</li>
            <li className="hover:text-white transition cursor-pointer">Education</li>
            <li className="hover:text-white transition cursor-pointer">Resume</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-cyan-400 text-sm font-semibold tracking-widest mb-6">
            STAY UPDATED
          </h4>

          {!subscribed ? (
            <>
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="
                    w-full px-4 py-2.5 rounded-xl
                    bg-white/5 border border-white/10
                    text-sm text-white placeholder:text-gray-500
                    focus:outline-none focus:border-cyan-400/50
                  "
                />
                <button
                  onClick={handleSubscribe}
                  className="w-11 h-11 rounded-xl bg-cyan-500 flex items-center justify-center hover:bg-cyan-400 transition"
                >
                  <RiSendPlaneFill />
                </button>
              </div>

              {error && (
                <p className="text-red-400 text-xs mb-2">{error}</p>
              )}

              <p className="text-gray-400 text-xs mb-6">
                Get notified about new AI projects and innovations
              </p>
            </>
          ) : (
            <div className="flex items-center gap-3 mb-6 text-emerald-400 text-sm">
              <RiCheckLine className="text-lg" />
              Thank you for subscribing!
            </div>
          )}

          <p className="text-gray-300 text-sm mb-3">Follow the journey</p>

          <div className="flex gap-3">
            {socialLinks.map(({ label, href, icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                aria-label={label}
                className="
                  w-10 h-10 rounded-xl
                  bg-white/5 border border-white/10
                  flex items-center justify-center
                  text-gray-400
                  hover:text-white hover:border-white/30
                  hover:-translate-y-0.5
                  transition-all
                "
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs gap-4">
        <span>© {currentYear} Md Shakil. All rights reserved.</span>
        <span>
          Designed & Engineered with <span className="text-cyan-400">⚡</span> by
          Md Shakil
        </span>
      </div>
    </footer>
  );
}
