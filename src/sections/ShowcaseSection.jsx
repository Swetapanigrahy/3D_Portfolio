import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Fade in section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
      }
    );

    // Animate project cards
    gsap.utils.toArray(".project-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section id="showcase" ref={sectionRef} className="py-20 px-5 md:px-10 lg:px-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-white/70">
            Showcasing my best work and achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Project */}
          <div className="project-card lg:col-span-2">
            <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative aspect-video overflow-hidden flex items-center justify-center bg-gray-900">
                <img
                  src="/images/logos/Screenshot (3401).png"
                  alt="Multi-user Blog Website"
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500 p-4 bg-white/5"
                  loading="lazy"
                  style={{ objectFit: 'contain' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Multi-user Blog Website
                </h3>
                <p className="text-white/70 mb-6">
                  A full-stack blogging platform with user authentication, real-time
                  updates, and rich text editing. Features include post creation,
                  comments, likes, and user profiles with a modern, responsive design.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["React", "Node.js", "MongoDB", "Redux", "Tailwind CSS"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Projects */}
          <div className="project-card">
            <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative aspect-video overflow-hidden flex items-center justify-center bg-gray-900">
                <img
                  src="/images/logos/Screenshot (3402).png"
                  alt="Stock Trading Platform"
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500 p-4 bg-white/5"
                  loading="lazy"
                  style={{ objectFit: 'contain' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Stock Trading Platform
                </h3>
                <p className="text-white/70 mb-4">
                  A comprehensive stock trading platform featuring real-time market data,
                  interactive charts, portfolio tracking, and paper trading capabilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "Express", "Bootstrap"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative aspect-video overflow-hidden flex items-center justify-center bg-gray-900">
                <img
                  src="/images/logos/Screenshot (3417).png"
                  alt="3D Portfolio Website"
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500 p-4 bg-white/5"
                  loading="lazy"
                  style={{ objectFit: 'contain' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">3D Portfolio Website</h3>
                <p className="text-white/70 mb-4">
                  Interactive portfolio showcasing projects with 3D elements and
                  smooth animations.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Three.js", "GSAP", "Tailwind"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
