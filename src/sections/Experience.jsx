import React from "react";
import { motion } from "framer-motion";
import { expCards } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="relative min-h-screen py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <span className="text-white/70 uppercase tracking-wider text-sm font-medium">
            My Professional Journey
          </span>
          <h2 className="text-6xl font-bold mt-4 mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            Experience
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {expCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Card */}
              <div className="group relative bg-[#1a1a1a] rounded-2xl p-1 hover:bg-gradient-to-r hover:from-white/20 hover:via-white/5 hover:to-transparent transition-all duration-300">
                <div className="relative bg-[#0f0f0f] rounded-xl p-8 md:p-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                  {/* Content Grid */}
                  <div className="relative grid md:grid-cols-[1fr,2fr] gap-8 items-start">
                    {/* Left Column - Company Info */}
                    <div>
                      {/* Logo Container */}
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 mb-6">
                        <img
                          src={card.logoPath}
                          alt={card.title}
                          className="w-12 h-12 object-contain"
                        />
                      </div>

                      {/* Company & Duration */}
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {card.title}
                      </h3>
                      <p className="text-white/50 font-medium">{card.date}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="px-3 py-1 text-sm bg-white/5 text-white/70 rounded-full border border-white/10">
                          Frontend
                        </span>
                        <span className="px-3 py-1 text-sm bg-white/5 text-white/70 rounded-full border border-white/10">
                          Development
                        </span>
                      </div>
                    </div>

                    {/* Right Column - Experience Details */}
                    <div className="space-y-6">
                      {/* Description */}
                      <div className="prose prose-invert">
                        <p className="text-white/70 leading-relaxed text-lg">
                          {card.review}
                        </p>
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-4">
                        <h4 className="text-white font-semibold flex items-center gap-3">
                          <span className="h-px w-6 bg-white/20" />
                          Key Responsibilities
                        </h4>
                        <div className="grid gap-3">
                          {card.responsibilities.map((item, idx) => (
                            <div
                              key={idx}
                              className="group/item flex items-start gap-4 relative pl-4"
                            >
                              <div className="absolute left-0 top-[0.6rem] w-2 h-2 rounded-full bg-white/20 group-hover/item:bg-white/40 transition-colors" />
                              <p className="text-white/60 group-hover/item:text-white/80 transition-colors">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute inset-px bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
                </div>
              </div>

              {/* Connector Line */}
              {index !== expCards.length - 1 && (
                <div className="absolute left-1/2 bottom-0 w-px h-12 bg-gradient-to-b from-white/10 to-transparent transform translate-y-full" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
