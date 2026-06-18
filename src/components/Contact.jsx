import React from "react";
import {
  RiMailLine,
  RiWhatsappLine,
  RiLinkedinFill,
  RiGithubLine,
  RiCheckLine,
} from "react-icons/ri";
import { SiGeeksforgeeks, SiHackerrank } from "react-icons/si";

export default function Contact() {
  const profiles = [
    {
      label: "LinkedIn",
      icon: <RiLinkedinFill />,
      href: "https://www.linkedin.com/in/mdshakil2004?from=Md_Shakil_portfolio",
      color: "text-[#0A66C2]",
      glow: "shadow-[0_0_22px_rgba(10,102,194,0.45)]",
    },
    {
      label: "GitHub",
      icon: <RiGithubLine />,
      href: "https://github.com/mdShakil2004?from=Md_Shakil_portfolio",
      color: "text-gray-200",
      glow: "shadow-[0_0_22px_rgba(255,255,255,0.35)]",
    },
    {
      label: "GeeksforGeeks (DSA)",
      icon: <SiGeeksforgeeks />,
      href: "https://www.geeksforgeeks.org/profile/shakilbhj47v?tab=activity",
      color: "text-[#2F8D46]",
      glow: "shadow-[0_0_22px_rgba(47,141,70,0.45)]",
    },
    {
      label: "HackerRank (DSA)",
      icon: <SiHackerrank />,
      href: "https://www.hackerrank.com/profile/mdshakil02042003?from=Md_Shakil_portfolio",
      color: "text-[#00EA64]",
      glow: "shadow-[0_0_22px_rgba(0,234,100,0.45)]",
    },
    {
      label: "Email",
      icon: <RiMailLine />,
      href: "mailto:iam.shakil.dev@gmail.com?subject=Opportunity%20Discussion%20—%20Portfolio%20Review",
      color: "text-cyan-400",
      glow: "shadow-[0_0_22px_rgba(34,211,238,0.45)]",
    },
  ];

  return (
    <section className="relative min-h-screen bg-black py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Header ===== */}
        <div
          data-aos="fade-down"
          data-aos-duration="800"
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            LET&apos;S BUILD THE FUTURE
          </h2>
          <p className="mt-5 text-gray-400 text-lg max-w-3xl mx-auto">
            Ready to collaborate on innovative AI projects and cutting-edge solutions or SDE role
          </p>
        </div>

        {/* ===== Main Glass Card ===== */}
        <div className="relative mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-[#0b1220] to-[#060b16] border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.8)] p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* ===== LEFT ===== */}
            <div
              data-aos="fade-right"
              data-aos-duration="850"
            >
              <p className="text-cyan-400 text-xs tracking-widest font-semibold mb-2">
                DIRECT CHANNELS
              </p>
              <h3 className="text-3xl font-bold text-white mb-8">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <ContactRow
                  icon={<RiMailLine />}
                  title="Email"
                  subtitle="iam.shakil.dev@gmail.com"
                  color="cyan"
                  href="mailto:iam.shakil.dev@gmail.com?subject=Opportunity%20Discussion%20—%20Portfolio%20Review"
                />

                <ContactRow
                  icon={<RiWhatsappLine />}
                  title="WhatsApp"
                  subtitle="+91 7488940100"
                  color="green"
                  href="https://wa.me/917488940100?text=Hi%20Md%20Shakil,%20I%20visited%20your%20portfolio!"
                />

                <ContactRow
                  icon={<RiLinkedinFill />}
                  title="LinkedIn"
                  subtitle="Connect with me"
                  color="blue"
                  href="https://www.linkedin.com/in/mdshakil2004?from=Md_Shakil_portfolio"
                />

                <ContactRow
                  icon={<RiGithubLine />}
                  title="GitHub"
                  subtitle="View my work"
                  color="purple"
                  href="https://github.com/mdShakil2004?from=Md_Shakil_portfolio"
                />
              </div>

              <div className="mt-10 flex items-center gap-2 text-xs text-cyan-400">
                ⏱ RESPONSE TIME: <span className="text-gray-400">&lt; 4 HOURS</span>
              </div>
            </div>

            {/* ===== RIGHT ===== */}
            <div
              data-aos="fade-left"
              data-aos-duration="850"
              className="space-y-6"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-4 py-2 rounded-xl bg-black/80 backdrop-blur border border-white/10 text-white text-sm font-medium shadow-lg">
                  <span className="text-cyan-400">📍</span>
                  Jaipur, India
                </div>

                <iframe
                  title="Jaipur Map"
                  className="w-full h-56 grayscale contrast-125"
                  src="https://www.google.com/maps?q=Jaipur,India&output=embed"
                  loading="lazy"
                />
              </div>

              <div className="rounded-2xl p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Available For
                </h4>
                <ul className="space-y-3 text-gray-300 text-sm">
                  {[
                    "Full-time opportunities",
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
          </div>

          {/* ===== Social Icons ===== */}
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="absolute bottom-6 right-8 flex gap-3"
          >
            {profiles.map(({ label, icon, href, color, glow }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                aria-label={label}
                className="group w-11 h-11 rounded-xl bg-gradient-to-br from-white/6 to-white/0 border border-white/10 flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:-translate-y-1"
              >
                <span className={`text-lg ${color} transition-all duration-300 group-hover:${glow}`}>
                  {icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Contact Row ===== */
function ContactRow({ icon, title, subtitle, color, href }) {
  const colors = {
    cyan: "from-cyan-500/20 to-cyan-500/5 text-cyan-400",
    green: "from-emerald-500/20 to-emerald-500/5 text-emerald-400",
    blue: "from-blue-500/20 to-blue-500/5 text-blue-400",
    purple: "from-purple-500/20 to-purple-500/5 text-purple-400",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between px-5 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition cursor-pointer group"
    >
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[color]} border border-white/10 flex items-center justify-center text-xl`}>
          {icon}
        </div>
        <div>
          <p className="text-white font-medium">{title}</p>
          <p className="text-sm text-gray-400 group-hover:text-gray-300">
            {subtitle}
          </p>
        </div>
      </div>
      <span className="text-gray-500 text-xl group-hover:text-white transition">
        →
      </span>
    </a>
  );
}
