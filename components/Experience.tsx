import React from 'react';
import { SectionId, EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-24 bg-neo-bg border-t-3 border-neo-black">
      <div className="container mx-auto px-4">
        
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-5xl md:text-7xl font-black bg-neo-yellow inline-block px-4 border-3 border-neo-black shadow-neo">
            THE GRIND
          </h2>
          <div className="hidden md:block w-32 h-32 bg-neo-pink rounded-full border-3 border-neo-black animate-bounce"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div 
              key={exp.id} 
              className="group relative bg-white border-3 border-neo-black p-0 shadow-neo-lg hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all duration-200"
            >
              {/* Header */}
              <div className="bg-neo-black text-white p-4 flex flex-col md:flex-row justify-between items-start md:items-center border-b-3 border-neo-black">
                <div>
                  <h3 className="text-2xl font-bold text-neo-green">{exp.company}</h3>
                  <p className="font-mono text-sm">{exp.location}</p>
                </div>
                <div className="mt-2 md:mt-0 bg-neo-white text-neo-black px-3 py-1 font-mono text-xs font-bold border-2 border-white transform md:rotate-2">
                  {exp.period}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h4 className="text-xl font-black mb-6 flex items-center gap-2">
                  <span className="w-4 h-4 bg-neo-pink border-2 border-neo-black"></span>
                  {exp.role}
                </h4>
                <ul className="space-y-4 font-mono text-sm md:text-base">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="min-w-[20px] font-bold text-neo-blue">{`0${i+1}.`}</span>
                      <p className="leading-relaxed text-gray-800">{desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;