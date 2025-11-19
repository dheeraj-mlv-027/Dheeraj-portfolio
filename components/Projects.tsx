import React from 'react';
import { SectionId, PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-neo-pink border-t-3 border-neo-black">
      <div className="container mx-auto px-4">
        
        <h2 className="text-5xl md:text-7xl font-black text-white mb-16 text-stroke-3 text-center" style={{ WebkitTextStroke: '3px black' }}>
          BUILD LOGS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-neo-white border-3 border-neo-black p-6 flex flex-col justify-between shadow-neo-lg transition-transform hover:-translate-y-2 ${index % 2 !== 0 ? 'md:translate-y-12' : ''}`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                   <h3 className="text-2xl font-black uppercase leading-tight">{project.title}</h3>
                   <div className="bg-neo-black text-white w-8 h-8 flex items-center justify-center font-mono text-xs border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors cursor-help">?</div>
                </div>
                
                <p className="font-mono text-sm mb-6 border-l-4 border-neo-green pl-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-neo-yellow border-2 border-neo-black px-2 py-1 text-xs font-bold uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {project.link ? (
                <a 
                  href={project.link} 
                  className="w-full bg-neo-black text-white py-3 font-bold uppercase text-center hover:bg-neo-blue transition-colors border-2 border-transparent hover:border-black flex items-center justify-center gap-2"
                >
                  Deploy <ExternalLink size={16} />
                </a>
              ) : (
                <button className="w-full bg-gray-200 text-gray-500 py-3 font-bold uppercase text-center border-2 border-gray-300 cursor-not-allowed">
                  Confidential
                </button>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;