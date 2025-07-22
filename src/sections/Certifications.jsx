import { certifications } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "./GlowCard";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

const Certifications = () => {
  return (
    <section id="certifications" className="flex-center section-padding bg-gray-900 py-20">
      <div className="w-full h-full md:px-10 px-5 max-w-7xl mx-auto">
        <TitleHeader
          title="Certifications & Achievements"
          sub="🎓 My Learning Journey"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {certifications.map((cert, index) => (
            <GlowCard 
              key={index} 
              card={cert} 
              index={index}
              isCertification={true}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-yellow-400 text-2xl">
                    <FaAward />
                  </div>
                  <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 flex-grow">{cert.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-sm text-gray-400">{cert.issuer}</span>
                  <span className="text-sm text-yellow-400">{cert.date}</span>
                </div>
                {cert.link && cert.link !== "#" && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    View Credential <FaExternalLinkAlt className="ml-1 text-xs" />
                  </a>
                )}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
